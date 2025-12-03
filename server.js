const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/location", (req, res) => {
    const { lat, lon, accuracy } = req.body;

    console.log("Получена геолокация:");
    console.log("Широта:", lat);
    console.log("Долгота:", lon);
    console.log("Точность:", accuracy + "м");

    const log = `LAT: ${lat}, LON: ${lon}, ACC: ${accuracy}, TIME: ${new Date().toISOString()}\n`;
    fs.appendFileSync("locations.log", log);

    res.json({ status: "OK" });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Сервер запущен: http://localhost:" + PORT));
