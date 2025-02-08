import { ArraySchema, Schema, type, view } from "@colyseus/schema";
import { nanoid } from "nanoid";

export class Component extends Schema {
  @type("string") name: string;
  @type("number") value: number;
}

export class ComponentWithArray extends Component {
  @type(["string"]) spells: ArraySchema<string> = new ArraySchema();
}

export class Entity extends Schema {
  @type("string") id: string = nanoid(9);
  @type([Component]) components = new ArraySchema<Component>();

  constructor() {
    super();

    this.components.push(new Component());
    this.components.push(new ComponentWithArray());
  }
}

export class MyRoomState extends Schema {
  @view() @type({ map: Entity }) entities = new Map<string, Entity>();
}
