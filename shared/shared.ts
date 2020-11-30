// здесь описываются данные которые необходимы платформе

export type ID = number; // should be BigInt?
export type Token = string;
export type Coordinate = number; // should be BigInt? probably not

export type Position = {
    x: Coordinate,
    y: Coordinate
};

// для регистрации нового пользователя
export type NewUserDescription = {
    //
};

// данные авторизации
export type AuthInfo = {
    token: Token;
    userId: ID;
};

// информация о пользателе
export type UserInfo = {
    userId: ID;

    currentBoardId: ID | null;
    currentPosition: Position;
};

export type BaseObject = {
    objectId: ID;

    position: Position;
    
    // any custom user data goes here
}

export type BoardHistoryStep = {
    stepId: ID;

    diff: object;
};

export type BoardInfo = {
    boardId: ID;

    history: BoardHistoryStep[]
}