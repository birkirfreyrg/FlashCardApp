import express, { Request, Response } from "express";
import mongoose from 'mongoose';

import Deck from "./models/Deck";

const PORT = 5000;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.set
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    'mongodb+srv://flashcardname:dI8pbzRBVTLKJ89t@flashcardcluster.merjja7.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
})

