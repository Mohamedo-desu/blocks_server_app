const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

// Initial state of the boxes
const initialState = {
  redBox: { x: 50, y: 50 },
  blueBox: { x: 150, y: 150 },
};

// Serve a simple response
app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

// Handle WebSocket connections
io.on("connection", (socket) => {
  console.log("a user connected");

  // Send initial state to the newly connected client
  socket.emit("initial_state", initialState);

  // Handle box position updates
  socket.on("update", (data) => {
    // Broadcast the update to all other clients
    socket.broadcast.emit("update", data);
  });

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });
});

// Error handling
server.on("error", (err) => {
  console.error("Server error:", err);
});

// Start the server
server.listen(process.env.PORT || 3000);
