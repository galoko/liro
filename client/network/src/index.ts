import SomeProtocol from "./someProtocol"

export class LiroProtocols {
    public static SomeProtocol = SomeProtocol
}

export { default as LiroProtocol } from "./protocol"
export {
    ID,
    Token,
    NewUserDescription,
    UserInfo,
    BoardInfo,
    BoardHistoryStep,
} from "../../../shared/shared"
