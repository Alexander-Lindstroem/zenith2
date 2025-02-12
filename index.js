import express from "express";
import birdRouter from "./routes/birdRouter.js";
import mammalRouter from "./routes/mammalRouter.js";
import reptileRouter from "./routes/reptileRouter.js"
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("pages/index", {
        headTitle: "Zoo"
    })
})

app.use("/birds", birdRouter)
app.use("/mammals", mammalRouter)
app.use("/reptiles", reptileRouter)

app.listen(PORT, () => console.log(`✅ listening on port ${PORT} ➡️ http://localhost:${PORT}`))
