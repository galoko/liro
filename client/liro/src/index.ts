import LiroCore from "liro-core"
import { LiroProtocols, LiroProtocol, UserInfo } from "liro-network"

async function getCurrentUser(protocol: LiroProtocol): Promise<UserInfo> {
    const TOKEN_SLOT = "liro-token"
    let token = localStorage.getItem(TOKEN_SLOT)
    if (token === null) {
        token = await protocol.registerNewUser({})
        localStorage.setItem(TOKEN_SLOT, token)
    }

    const userInfo = await protocol.getUserInfo(token)
    return userInfo
}

async function main(): Promise<void> {
    // находим корневой элемент
    const root = document.getElementById("root")
    if (root === null) {
        throw new Error("Cannot find root element.")
    }

    // вешаем на него выбранный рендер
    const render = new LiroCore.LiroCanvasRender(root)
    const protocol = new LiroProtocols.SomeProtocol(
        "http://37.79.251.74:3111",
        "ws://37.79.251.74:3112"
    )

    const userInfo = await getCurrentUser(protocol)
    debugger
}

main()
