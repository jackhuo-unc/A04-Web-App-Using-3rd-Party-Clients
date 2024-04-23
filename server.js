import express from "express";
import fetch from "node-fetch";
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/quack', async (req, res) => {
    try {
        const response = await fetch('https://random-d.uk/api/quack');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'server error'})
    }
});

app.get('/male', async (req, res) => {
    try {
        const response = await fetch(`https://api.namefake.com/english-united-states/male`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'server error'})
    }
})

app.get('/female', async (req, res) => {
    try {
        const response = await fetch(`https://api.namefake.com/english-united-states/female`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'server error'})
    }
})

app.listen(PORT, _ => {
    console.log(`Server running on localhost:${PORT}`);
})
