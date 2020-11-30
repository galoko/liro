import {
    ID,
    Token,
    NewUserDescription,
    AuthInfo,
    UserInfo,
    BoardInfo,
    BoardHistoryStep,
} from "../../../shared/shared"

export default interface LiroProtocol {
    // действия
    registerNewUser(desc: NewUserDescription): Promise<Token>
    getUserInfo(token: Token): Promise<UserInfo>
    enterBoard(
        boardId: ID,
        lastChangeId: ID,
        changes: (historyStep: BoardHistoryStep) => void
    ): void
    exitBoard(): void
}
