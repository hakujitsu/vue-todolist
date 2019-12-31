export interface IUser {
    id: UserId;
}

export type UserId = string;

export interface IMessage {
    sender: UserId;
    msg: string;
}
