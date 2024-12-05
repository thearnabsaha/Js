# Player Management API

This is a simple RESTful API for managing player information. It allows you to perform CRUD operations (Create, Read, Update, Delete) on a player dataset stored in a `data.json` file.

## Features

- **Health Check**: Check server status.
- **Get All Players**: Retrieve a list of all players.
- **Get Player by ID**: Retrieve player details by their unique ID.
- **Add New Player**: Add a new player to the dataset.
- **Update Player Details**: Update specific details of an existing player.
- **Replace or Add Player**: Replace an existing player or add a new player if not found.
- **Delete Player**: Remove a player from the dataset.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set the following variables:
   ```env
   PORT=3001
   CORS_ORIGIN=http://localhost:3000
   ```

5. Create a `src/data.json` file and initialize it with an empty array:
   ```json
   []
   ```

## Usage

### Start the server

```bash
npm start
```

The server will start on the port specified in the `.env` file (default: 3001).

### Endpoints

#### Health Check
- **GET** `/healthcheck`
- Response:
  ```text
  this is healthcheck route
  ```

#### Get All Players
- **GET** `/`
- Response:
  ```json
  [
    {
      "id": "player1",
      "name": "John Doe",
      "age": 25,
      "email": "johndoe@example.com"
    }
  ]
  ```

#### Get Player by ID
- **GET** `/:id`
- Response:
  - Success: Returns the player object.
  - Error: `404 Player doesn't exist`.

#### Add New Player
- **POST** `/`
- Body:
  ```json
  {
    "name": "Jane Doe",
    "age": 22,
    "email": "janedoe@example.com"
  }
  ```
- Response: Updated list of players.

#### Update Player Fields
- **PATCH** `/:id`
- Body:
  ```json
  {
    "age": 23
  }
  ```
- Response: Updated list of players.

#### Replace or Add Player
- **PUT** `/:id`
- Body:
  ```json
  {
    "name": "Jane Doe",
    "age": 22,
    "email": "janedoe@example.com"
  }
  ```
- Response:
  - `201`: Player added.
  - `200`: Player updated.

#### Delete Player
- **DELETE** `/:id`
- Response:
  - Success: Updated list of players.
  - Error: `404 Player doesn't exist`.

## Middleware

- **Morgan**: Logs HTTP requests.
- **CORS**: Enables Cross-Origin Resource Sharing.
- **Express JSON**: Parses JSON payloads.
- **Cookie Parser**: Parses cookies.

## Built With

- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [Morgan](https://github.com/expressjs/morgan) - HTTP request logger
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables
- [shortid](https://github.com/dylang/shortid) - Generates unique IDs
- [CORS](https://github.com/expressjs/cors) - Middleware for enabling CORS

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
