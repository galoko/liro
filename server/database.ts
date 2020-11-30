import fs from "fs"

import {
    ID,
    Token,
    Position,
    NewUserDescription,
    AuthInfo,
    UserInfo,
    BoardInfo,
} from "../shared/shared"

type Data = {
    nextId: ID
    authorizations: AuthInfo[]
    users: UserInfo[]
    boards: BoardInfo[]
}

class Database {
    private data: Data

    private static FILENAME = "db.json"

    constructor() {
        try {
            this.data = JSON.parse(fs.readFileSync(Database.FILENAME, "utf-8"))
        } catch (e) {
            this.data = {
                nextId: 1,
                authorizations: [],
                users: [],
                boards: [],
            }
            this.save()
        }
    }

    public save(): void {
        fs.writeFileSync(
            Database.FILENAME,
            JSON.stringify(this.data, null, 4),
            "utf-8"
        )
    }

    private nextId(): ID {
        return this.data.nextId++
    }

    public registerNewUser(desc: NewUserDescription): Token {
        const makeToken = (length: number): string => {
            let result = ""
            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
            const charactersLength = characters.length
            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                )
            }
            return result
        }

        const userInfo = {
            userId: this.nextId(),
            currentBoardId: null,
            currentPosition: { x: 0, y: 0 } as Position,
        } as UserInfo

        const authInfo = {
            token: makeToken(32),
            userId: userInfo.userId,
        } as AuthInfo

        this.data.users.push(userInfo)
        this.data.authorizations.push(authInfo)

        this.save()

        return authInfo.token
    }

    public getUserInfo(token: string): UserInfo | null {
        const authInfo =
            this.data.authorizations.find(entry => entry.token === token) || null
        if (authInfo === null) {
            return null
        }

        const userInfo =
            this.data.users.find(userInfo => userInfo.userId === authInfo.userId) ||
            null

        return userInfo
    }

    public createBoard(): BoardInfo {
        const boardInfo = {
            boardId: this.nextId(),
            history: [],
        }

        this.data.boards.push(boardInfo)
        this.save()

        return boardInfo
    }

    public getOrCreateFirstBoard(): BoardInfo {
        if (this.data.boards.length === 0) {
            return this.createBoard()
        } else {
            return this.data.boards[0]
        }
    }
}

const database = new Database()

export default database
