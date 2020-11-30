import LiroRender from "./render"

export default class LiroBaseObject {
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    public render(context: LiroRender): void {
        // default implentation
        throw new Error("All object must implement render.")
    }

    public serialize(): object {
        // default implentation
        return {}
    }

    public deserialize(data: object): void {
        // default implentation
    }
}
