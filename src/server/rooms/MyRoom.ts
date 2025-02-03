import { Room, Client } from "@colyseus/core";
import { Entity, MyRoomState } from "./schema/MyRoomState";
import { StateView } from "@colyseus/schema";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;

  onCreate(options: any) {
    this.state = new MyRoomState();

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message
      //
    });

    for (let i = 0; i < 10; i++) {
      const entity = new Entity();
      this.state.entities.set(entity.id, entity);
    }
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
    client.view = new StateView();
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
