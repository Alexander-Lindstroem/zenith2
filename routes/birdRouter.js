import express from "express"
import {birds} from "../data/animalData.js";

const birdRouter = express.Router()

birdRouter.get("/", (req, res) => {
    res.render("pages/animal", {
        headTitle: "Birds",
        headerTitle: "Birds",
        welcomeMsg: "We are excited to invite you to explore our wonderful collection of birds, featuring the striking Cassowary, the cheerful Kookaburra, and the majestic Yellow-Tailed Black Cockatoo. Immerse yourself in the fascinating world of these incredible feathered creatures and learn about their unique traits, natural habitats, and behaviors. Enjoy your visit, and feel free to reach out if you have any questions or would like more information about our avian friends!"
    }) 
})

birdRouter.get("/cassowary", (req, res) => {
    let cassowary = birds[0];
    res.render("pages/animal", {
        headTitle: cassowary.name,
        infoImage: cassowary.imageFilename,
        birds: cassowary.name,
        infoLifespan: cassowary.lifespan,
        infoGroup: cassowary.group,
        infoFood: cassowary.food,
        infoDescription: cassowary.description,
        infoLength: cassowary.length,
        infoWeight: cassowary.weight,
        infoHabitat: cassowary.habitat
    })
})

birdRouter.get("/kookaburra", (req, res) => {
    let cassowary = birds[1];
    res.render("pages/animal", {
        headTitle: cassowary.name,
        infoImage: cassowary.imageFilename,
        birds: cassowary.name,
        infoLifespan: cassowary.lifespan,
        infoGroup: cassowary.group,
        infoFood: cassowary.food,
        infoDescription: cassowary.description,
        infoLength: cassowary.length,
        infoWeight: cassowary.weight,
        infoHabitat: cassowary.habitat
    })
})

birdRouter.get("/yellow-tailed-black-cockatoo", (req, res) => {
    let cassowary = birds[2];
    res.render("pages/animal", {
        headTitle: cassowary.name,
        infoImage: cassowary.imageFilename,
        birds: cassowary.name,
        infoLifespan: cassowary.lifespan,
        infoGroup: cassowary.group,
        infoFood: cassowary.food,
        infoDescription: cassowary.description,
        infoLength: cassowary.length,
        infoWeight: cassowary.weight,
        infoHabitat: cassowary.habitat
    })
})

export default birdRouter