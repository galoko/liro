import express from "express"
import cors from "cors"
import WebSocket from "ws"

import database from "./database"

export function startLiroServer(): void {
    const app = express()
    app.set("json spaces", 4)
    app.use(express.json())
    app.use(cors())
    app.options("*", cors())

    app.listen(3111)

    app.post("/register", (req, res) => {
        res.json(database.registerNewUser(req.body))
    })

    app.get("/user/:token", (req, res) => {
        const token = req.params.token
        const userInfo = database.getUserInfo(token)
        if (userInfo) {
            res.json(userInfo)
        } else {
            res.sendStatus(404)
        }
    })

    const wss = new WebSocket.Server({ port: 3112 })

    wss.on("connection", function (ws, upgradeReq) {
        const url = upgradeReq.url || ""
        const match = url.match(/^\/board\/(\d+)/) || []
        const boardId = Number(match[1])
        if (isNaN(boardId)) {
            ws.close()
            return
        }

        ws.on("message", function (message) {
            debugger
            console.log("received: %s", message)
        })

        ws.send("something")
    })
}
