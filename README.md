# Move Square Blocks Server

## Overview

The "Move Square Blocks Server" is a Node.js server that handles real-time communication between clients for the "Move Square Blocks" app. It uses Socket.io for WebSocket connections and Express for serving HTTP requests.

## Features

- **Initial State Broadcasting:** Sends the initial state of the blocks to new clients upon connection.
- **Real-time Updates:** Broadcasts position updates of the blocks to all connected clients in real-time.
- **Connection Management:** Logs client connections and disconnections.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side code.
- **Express:** Web framework for Node.js.
- **Socket.io:** Library for real-time communication using WebSocket.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Mohamedo-desu/blocks_server.git
   cd blocks_server
   ```
