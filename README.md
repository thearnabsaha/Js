# Player Management API

This API allows you to manage player data, stored in a `data.json` file. It provides routes for creating, retrieving, updating, and deleting player records. The project is built with Node.js, Express.js, and uses `fs` for file handling.

## Features

- Healthcheck route to verify API status.
- CRUD operations for player management.
- JSON file-based storage.
- Input validation via request body and URL parameters.
- Lightweight, file-based persistence.

## Prerequisites

- Node.js installed on your system.
- `data.json` file in the `src` directory.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-folder>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file with the following variables:
   ```env
   PORT=3001
   CORS_ORIGIN=http://localhost:3000
   ```

## Running the Server

Start the server with:
```bash
npm start
```
Or with `nodemon` for development:
```bash
npm run dev
```

## API Documentation

### Healthcheck
- **Endpoint:** `/healthcheck`
- **Method:** `GET`
- **Description:** Check the server's health.
- **Response:**
  ```
  200 OK
  "this is healthcheck route"
  ```

### Get All Players
- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Retrieve all players.
- **Response:**
  ```json
  [
    {
      "id": "123",
      "name": "John Doe",
      "age": 25,
      "email": "john@example.com"
    }
  ]
  ```

### Get Player by ID
- **Endpoint:** `/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific player by ID.
- **Response:**
  - Success: `200 OK`
  - Failure: `404 Not Found`

### Create a New Player
- **Endpoint:** `/`
- **Method:** `POST`
- **Description:** Create a new player.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "age": 25,
    "email": "john@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "id": "123",
    "name": "John Doe",
    "age": 25,
    "email": "john@example.com"
  }
  ```

### Update a Player Partially
- **Endpoint:** `/:id`
- **Method:** `PATCH`
- **Description:** Update specific fields of a player.
- **Request Body:** Any of `name`, `age`, `email`.
- **Response:**
  - Success: `200 OK`
  - Failure: `404 Not Found`

### Replace or Create a Player
- **Endpoint:** `/:id`
- **Method:** `PUT`
- **Description:** Replace a player if it exists or create a new player with the given ID.
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "age": 30,
    "email": "jane@example.com"
  }
  ```
- **Response:**
  - Success: `200 OK`
  - New Player: `201 Created`

### Delete a Player
- **Endpoint:** `/:id`
- **Method:** `DELETE`
- **Description:** Remove a player by ID.
- **Response:**
  - Success: `200 OK`
  - Failure: `404 Not Found`

## Code Documentation (JSDoc Comments)

```javascript
/**
 * Player Management API built with Express.js.
 */

/** Import required modules */
import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { promises as fs } from 'fs';
import shortid from 'shortid';
import path from 'path';

/** Configure environment variables */
dotenv.config();
const port = process.env.PORT || 3001;

/** Middleware Setup */
app.use(morgan(':method :url :status :response-time ms', 'dev'));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

/** Healthcheck Route */
/**
 * @route GET /healthcheck
 * @description Checks server status
 * @returns {string} - Health status
 */
app.get('/healthcheck', (req, res) => {
  res.status(200).send('this is healthcheck route');
});

/** Path to JSON data file */
const dataLocation = path.resolve('src', './data.json');

/** CRUD Operations */
/**
 * @route GET /
 * @description Retrieves all players
 * @returns {Array} - List of players
 */
app.get('/', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  res.status(200).send(players);
});

/**
 * @route GET /:id
 * @description Retrieves a player by ID
 * @returns {Object} - Player object
 */
app.get('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const player = players.find((e) => e.id === req.params.id);
  if (!player) {
    res.status(404).send("Player doesn't exist");
  } else {
    res.status(200).send(player);
  }
});

/**
 * @route POST /
 * @description Creates a new player
 * @returns {Array} - Updated list of players
 */
app.post('/', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const newPlayer = { ...req.body, id: shortid.generate() };
  players.push(newPlayer);
  await fs.writeFile(dataLocation, JSON.stringify(players));
  res.status(201).send(players);
});

/**
 * @route DELETE /:id
 * @description Deletes a player by ID
 * @returns {Array} - Updated list of players
 */
app.delete('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const newPlayers = players.filter((e) => e.id !== req.params.id);
  await fs.writeFile(dataLocation, JSON.stringify(newPlayers));
  res.status(200).send(newPlayers);
});

/**
 * @route PATCH /:id
 * @description Updates a player's information
 * @returns {Array} - Updated list of players
 */
app.patch('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const player = players.find((e) => e.id === req.params.id);
  if (player) {
    player.name = req.body.name || player.name;
    player.age = req.body.age || player.age;
    player.email = req.body.email || player.email;
    await fs.writeFile(dataLocation, JSON.stringify(players));
    res.status(200).send(players);
  } else {
    res.status(404).send("Player doesn't exist");
  }
});

/**
 * @route PUT /:id
 * @description Replaces a player's information or creates a new player
 * @returns {Array} - Updated list of players
 */
app.put('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  let player = players.find((e) => e.id === req.params.id);
  if (player) {
    player.name = req.body.name || player.name;
    player.age = req.body.age || player.age;
    player.email = req.body.email || player.email;
    await fs.writeFile(dataLocation, JSON.stringify(players));
