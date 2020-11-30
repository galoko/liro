// так как рендер всех объектов будет написан на этом API
// а также нам нужно будет транслировать эти вызовы во все возможные типы рендеров

export default interface LiroRender {
    // state setters
    setFont(font: string): void
    setColor(color: string): void

    // path builders
    beginPath(): void
    rect(x: number, y: number, width: number, height: number): void
    moveTo(x: number, y: number): void
    lineTo(x: number, y: number): void

    // painters
    drawText(x: number, y: number, text: string): void
    stroke(): void
    fill(): void
}
