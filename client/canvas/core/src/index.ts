class LiroBaseObject {
    public render(): void {
        console.log("render call")
    }

    public serialize(): object {
        return {}
    }

    public deserialize(data: object): void {
        //
    }
}

const LiroCore = {
    LiroBaseObject: LiroBaseObject,
}

export default LiroCore
