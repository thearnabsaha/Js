import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3001;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
const morganFormat = ':method :url :status :response-time ms';
import { promises as fs } from 'fs';
import shortid from 'shortid';
import path from 'path';

/**
 * Middleware configuration
 */
app.use(morgan(morganFormat, 'dev'));
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

/**
 * Health check route
 * @route GET /healthcheck
 * @returns {string} 200 - Server health status
 */
app.get('/healthcheck', (req, res) => {
    res.status(200).send('this is healthcheck route');
});

const dataLocation = path.resolve("src", "./data.json");

/**
 * Get all players
 * @route GET /
 * @returns {Object[]} 200 - Array of player objects
 */
app.get('/', async (req, res) => {
    const data = await fs.readFile(dataLocation);
    const players = JSON.parse(data);
    res.status(200).send(players);
});

/**
 * Get a player by ID
 * @route GET /:id
 * @param {string} id - Player ID
 * @returns {Object} 200 - Player object
 * @returns {string} 404 - Player not found
 */
app.get('/:id', async (req, res) => {
    const data = await fs.readFile(dataLocation);
    const players = JSON.parse(data);
    const player = players.find((e) => e.id === req.params.id);
    if (!player) {
      res.status(404).send("doesn't exist");
    } else {
      res.status(200).send(player);
    }
});

/**
 * Add a new player
 * @route POST /
 * @bodyparam {string} name - Player name
 * @bodyparam {number} age - Player age
 * @bodyparam {string} email - Player email
 * @returns {Object[]} 201 - Updated array of players
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
 * Delete a player
 * @route DELETE /:id
 * @param {string} id - Player ID
 * @returns {Object[]} 200 - Updated array of players
 * @returns {string} 404 - Player not found
 */
app.delete('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const playerDoesExist = players.find((e) => e.id === req.params.id);
  if (!playerDoesExist) {
    res.status(404).send("player doesn't exist");
  } else {
    const newPlayers = players.filter((e) => e.id !== req.params.id);
    await fs.writeFile(dataLocation, JSON.stringify(newPlayers));
    res.status(200).send(newPlayers);
  }
});

/**
 * Update player fields
 * @route PATCH /:id
 * @param {string} id - Player ID
 * @bodyparam {string} [name] - Updated player name
 * @bodyparam {number} [age] - Updated player age
 * @bodyparam {string} [email] - Updated player email
 * @returns {Object[]} 200 - Updated array of players
 * @returns {string} 404 - Player not found
 */
app.patch('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const player = players.find((e) => e.id === req.params.id);
  if (!player) {
    res.status(404).send("player doesn't exist");
  } else {
    player.name = req.body.name || player.name;
    player.age = req.body.age || player.age;
    player.email = req.body.email || player.email;
    await fs.writeFile(dataLocation, JSON.stringify(players));
    res.status(200).send(players);
  }
});

/**
 * Replace or add a player
 * @route PUT /:id
 * @param {string} id - Player ID
 * @bodyparam {string} name - Player name
 * @bodyparam {number} age - Player age
 * @bodyparam {string} email - Player email
 * @returns {Object[]} 200 - Updated array of players (if player existed)
 * @returns {Object[]} 201 - Updated array of players (if new player was created)
 */
app.put('/:id', async (req, res) => {
  const data = await fs.readFile(dataLocation);
  const players = JSON.parse(data);
  const player = players.find((e) => e.id === req.params.id);
  if (!player) {
    const newPlayer = { ...req.body, id: req.params.id };
    players.push(newPlayer);
    await fs.writeFile(dataLocation, JSON.stringify(players));
    res.status(201).send(players);
  } else {
    player.name = req.body.name || player.name;
    player.age = req.body.age || player.age;
    player.email = req.body.email || player.email;
    await fs.writeFile(dataLocation, JSON.stringify(players));
    res.status(200).send(players);
  }
});

/**
 * Start the server
 */
app.listen(port, () => console.log('> Server is up and running on port: ' + port));
