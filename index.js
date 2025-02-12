import express from "express";
import birdRouter from "./routes/birdRouter.js";
import mammalRouter from "./routes/birdRouter.js";
import reptileRouter from "./routes/reptileRouter.js"
import {birds, mammals, reptiles, allAnimals} from "./data/animalData.js"
import * as path from "path";
const app = express();
const PORT = 3000;
const __dirname = path.resolve()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("pages/index", {
        headTitle: "Zoo",
        pageType: "home",
        allAnimals: allAnimals
    })
})

app.use("/birds", birdRouter)
app.use("/mammals", mammalRouter)
app.use("/reptiles", reptileRouter)

app.listen(PORT, () => console.log(`✅ listening on port ${PORT} ➡️ http://localhost:${PORT}`))
