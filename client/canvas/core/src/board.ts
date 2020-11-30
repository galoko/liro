import LiroBaseObject from "./baseObject"
import LiroRender from "./render"

export type LiroBoardOptions = {
    name: string
}

export class LiroBoard {
    private options: LiroBoardOptions
    private objects: LiroBaseObject[]
    private render: LiroRender | null

    constructor(options: LiroBoardOptions) {
        this.options = options
        this.objects = []

        this.render = null
    }

    public setRender(render: LiroRender): void {
        this.render = render
    }

    public draw(): void {
        if (this.render === null) {
            throw new Error("Board doesn't have render.")
        }
    }
}
