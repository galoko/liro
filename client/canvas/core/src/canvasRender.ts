import LiroRender from "./render"

export default class CanvasLiroRender implements LiroRender {
    private canvasNode: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    constructor(parentNode: HTMLElement) {
        this.canvasNode = document.createElement("canvas")
        const context = this.canvasNode.getContext("2d")
        if (context === null) {
            throw new Error("Cannot get Canvas 2D Context.")
        }
        this.context = context

        parentNode.appendChild(this.canvasNode)
    }

    setFont(font: string): void {
        this.context.font = font
    }

    setColor(color: string): void {
        this.context.fillStyle = color
        this.context.strokeStyle = color
    }

    beginPath(): void {
        this.context.beginPath()
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.context.rect(x, y, width, height)
    }

    drawText(x: number, y: number, text: string): void {
        this.context.fillText(text, x, y)
    }

    moveTo(x: number, y: number): void {
        this.context.moveTo(x, y)
    }

    lineTo(x: number, y: number): void {
        this.context.lineTo(x, y)
    }

    stroke(): void {
        this.context.stroke()
    }

    fill(): void {
        this.context.fill()
    }
}
