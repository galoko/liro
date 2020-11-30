import LiroCore from "liro-core"

export class SomeStupidWidget extends LiroCore.LiroBaseObject {
    public render(): void {
        console.log("overrided call")
    }
}
