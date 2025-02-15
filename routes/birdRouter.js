import express from "express"
import {birds} from "../data/animalData.js";

const birdRouter = express.Router()

birdRouter.get("/", (req, res) => {
    res.render("pages/animal", {
        headTitle: "Birds",
        headerTitle: "Birds",
        welcomeMsgTitle: `Welcome to the birds page!`,
        welcomeMsg: "We are excited to invite you to explore our wonderful collection of birds, featuring the striking Cassowary, the cheerful Kookaburra, and the majestic Yellow-Tailed Black Cockatoo. Immerse yourself in the fascinating world of these incredible feathered creatures and learn about their unique traits, natural habitats, and behaviors. Enjoy your visit, and feel free to reach out if you have any questions or would like more information about our avian friends!",
        animalArray: birds,
        pageType: "birds"
    }) 
})

birdRouter.get("/cassowary", (req, res) => {
    let cassowary = birds[0];
    res.render("pages/animal", {
        headTitle: cassowary.name,
        headerTitle: "Birds",
        infoImage: cassowary.imageFilename,
        birds: cassowary.name,
        infoLifespan: cassowary.lifespan,
        infoGroup: cassowary.group,
        infoFood: cassowary.food,
        infoDesc: cassowary.description,
        infoLength: cassowary.length,
        infoWeight: cassowary.weight,
        infoHabitat: cassowary.habitat,
        animalArray: birds,
        pageType: "birds"
    })
})

birdRouter.get("/kookaburra", (req, res) => {
    let kookaburra = birds[1];
    res.render("pages/animal", {
        headTitle: kookaburra.name,
        headerTitle: "Birds",
        infoImage: kookaburra.imageFilename,
        birds: kookaburra.name,
        infoLifespan: kookaburra.lifespan,
        infoGroup: kookaburra.group,
        infoFood: kookaburra.food,
        infoDesc: kookaburra.description,
        infoLength: kookaburra.length,
        infoWeight: kookaburra.weight,
        infoHabitat: kookaburra.habitat,
        animalArray: birds,
        pageType: "birds"
    })
})

birdRouter.get("/Yellow-Tailed%20Black%20Cockatoo", (req, res) => {
    let yellowtailedblackcockatoo = birds[2];
    res.render("pages/animal", {
        headTitle: yellowtailedblackcockatoo.name,
        headerTitle: "Birds",
        infoImage: yellowtailedblackcockatoo.imageFilename,
        birds: yellowtailedblackcockatoo.name,
        infoLifespan: yellowtailedblackcockatoo.lifespan,
        infoGroup: yellowtailedblackcockatoo.group,
        infoFood: yellowtailedblackcockatoo.food,
        infoDesc: yellowtailedblackcockatoo.description,
        infoLength: yellowtailedblackcockatoo.length,
        infoWeight: yellowtailedblackcockatoo.weight,
        infoHabitat: yellowtailedblackcockatoo.habitat,
        animalArray: birds,
        pageType: "birds"
    })
})

export default birdRouter