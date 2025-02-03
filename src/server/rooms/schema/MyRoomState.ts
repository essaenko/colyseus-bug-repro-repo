import { ArraySchema, Schema, type, view } from "@colyseus/schema";
import { nanoid } from "nanoid";

export class Component extends Schema {
  @type("string") name: string;
  @type("number") value: number;
}

export class Entity extends Schema {
  @type("string") id: string = nanoid(9);
  @type([Component]) components = new ArraySchema<Component>();
}

export class MyRoomState extends Schema {
  @view() @type({ map: Entity }) entities = new Map<string, Entity>();
}
