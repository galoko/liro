import { ID } from "./shared"

export enum PacketId {
    REQUEST_CHANGES_AND_SUBSCRIBE_TO_NEW_CHANGES = 1
}

export class PacketHeader {
    protected packetId: PacketId = 0;
}

export class RequestChangesAndSubscribeToNewChanges extends PacketHeader {
    private lastChangeId: ID;

    constructor (lastChangeId: ID) {
        super();
        this.packetId = PacketId.REQUEST_CHANGES_AND_SUBSCRIBE_TO_NEW_CHANGES;
        this.lastChangeId = lastChangeId;
    }
}