import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';

import Deck from "./models/Deck";

const PORT = 5000;

const app = express();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

app.get('/decks', async (req: Request, res: Response) => {
    // TODO: fetch all decks and send back to the user
    // 1. How do we fetch the decks from mongo?
    const decks = await Deck.find();
    // 2. How do we send back the array to the ui?
    res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

app.delete('/decks/:deckId', async (req: Request, res: Response) => {
    // TODO:
    // 1. get the deck id from the url
    const deckId = req.params.deckId;
    // 2. delete the deck from mongo
    const deck = await Deck.findByIdAndDelete(deckId);
    // 3. return the deleted deck to the user who made the request
    res.json(deck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
})

