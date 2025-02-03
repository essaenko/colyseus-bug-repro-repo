import { Client } from "colyseus.js";

document.addEventListener("DOMContentLoaded", () => {
  const client = new Client("ws://localhost:2567");

  client
    .joinOrCreate("my_room")
    .then((room) => {
      console.log("joined successfully", room);
    })
    .catch((e) => {
      console.error("join error", e);
    });
});
