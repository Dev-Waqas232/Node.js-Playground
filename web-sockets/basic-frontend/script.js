const btn = document.getElementById("btn");
const input = document.getElementById("message");
const form = document.querySelector("form");

const socket = io("http://localhost:8000");

socket.on("receive-message", (message) => {
  console.log("New message received:", message);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("send-message", input.value);
  input.value = "";
});
