import {
    ID,
    Token,
    NewUserDescription,
    AuthInfo,
    UserInfo,
    BoardInfo,
    BoardHistoryStep,
} from "../../../shared/shared"
import { PacketHeader, RequestChangesAndSubscribeToNewChanges } from "../../../shared/someProtocol"
import LiroProtocol from "./protocol"
import WebSocket from "ws"

export default class SomeProtocol implements LiroProtocol {
    private httpServerUrl: string
    private websocketServerUrl: string

    private boardWebSocketConnection: WebSocket | null

    constructor(httpServerUrl: string, websocketServerUrl: string) {
        this.httpServerUrl = httpServerUrl
        this.websocketServerUrl = websocketServerUrl

        this.boardWebSocketConnection = null
    }

    async registerNewUser(desc: NewUserDescription): Promise<Token> {
        const response = await fetch(`${this.httpServerUrl}/register`, {
            method: "POST",
            body: JSON.stringify(desc),
        })
        const data = await response.json()
        return data as Token
    }

    async getUserInfo(token: Token): Promise<UserInfo> {
        const response = await fetch(`${this.httpServerUrl}/user/${token}`)
        const data = await response.json()
        return data as UserInfo
    }

    async getOrCreateFirstBoard(): Promise<BoardInfo> {
        const response = await fetch(`${this.httpServerUrl}/board/first`)
        const data = await response.json()
        return data as BoardInfo
    }

    private sendPacket(ws: WebSocket, packet: PacketHeader): void {
        this.boardWebSocketConnection?.send(JSON.stringify(packet))
    }

    enterBoard(
        boardId: ID,
        lastChangeId: ID,
        changes: (historyStep: BoardHistoryStep) => void
    ): void {
        const createWebSocket = (): void => {
            const ws = new WebSocket(`${this.websocketServerUrl}/board/${boardId}`)
            this.boardWebSocketConnection = ws

            ws.on("open", (): void => {
                this.sendPacket(ws, new RequestChangesAndSubscribeToNewChanges(lastChangeId))
            })

            ws.on("message", (data: string): void => {
                if (ws !== this.boardWebSocketConnection) {
                    return
                }

                debugger
            })

            ws.on("close", () => {
                // reconnect in 2 seconds
                setTimeout(() => {
                    if (this.boardWebSocketConnection === ws) {
                        createWebSocket()
                    }
                }, 2000)
            })
        }

        createWebSocket()
    }

    exitBoard(): void {
        if (this.boardWebSocketConnection !== null) {
            this.boardWebSocketConnection.close()
            this.boardWebSocketConnection = null
        }
    }
}
