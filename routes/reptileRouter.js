import express from "express";
import {reptiles} from "../data/animalData.js";

const reptileRouter = express.Router()

reptileRouter.get("/", (req, res) => {
    res.render("pages/animal", {
        headTitle: "Reptiles",
        headerTitle: "Reptiles",
        welcomeMsgTitle: `Welcome to the reptiles page!`,
        welcomeMsg: "We are thrilled to have you explore our amazing collection of reptiles, including the fascinating Frill-Necked Lizard, the graceful Hawksbill Turtle, and the majestic Perentie. Dive into the world of these incredible creatures and discover their unique traits, habitats, and behaviors. Enjoy your visit, and don't hesitate to reach out if you have any questions or need more information about our reptilian friends!"
    })
})

reptileRouter.get("/Frill-Necked%20Lizard", (req, res) => {
    let frillneckedlizard = reptiles[0]
    res.render("pages/animal", {
        headTitle: frillneckedlizard.name,
        headerTitle: "Reptiles",
        infoImage: frillneckedlizard.imageFilename,
        infoLifespan: frillneckedlizard.lifespan,
        infoGroup: frillneckedlizard.group,
        infoFood: frillneckedlizard.food,
        infoDesc: frillneckedlizard.description,
        infoLength: frillneckedlizard.length,
        infoWeight: frillneckedlizard.weight,
        infoHabitat: frillneckedlizard.habitat,
        reptile: frillneckedlizard
    })
})

reptileRouter.get("/Hawksbill%20Turtle", (req, res) => {
    let hawksbillturtle = reptiles[1]
    res.render("pages/animal", {
        headTitle: hawksbillturtle.name,
        headerTitle: "Reptiles",
        infoImage: hawksbillturtle.imageFilename,
        infoLifespan: hawksbillturtle.lifespan,
        infoGroup: hawksbillturtle.group,
        infoFood: hawksbillturtle.food,
        infoDesc: hawksbillturtle.description,
        infoLength: hawksbillturtle.length,
        infoWeight: hawksbillturtle.weight,
        infoHabitat: hawksbillturtle.habitat,
        reptile: hawksbillturtle
    })
})

reptileRouter.get("/perentie", (req, res) => {
    let perentie = reptiles[2]
    res.render("pages/animal", {
        headTitle: perentie.name,
        headerTitle: "Reptiles",
        infoImage: perentie.imageFilename,
        infoLifespan: perentie.lifespan,
        infoGroup: perentie.group,
        infoFood: perentie.food,
        infoDesc: perentie.description,
        infoLength: perentie.length,
        infoWeight: perentie.weight,
        infoHabitat: perentie.habitat,
        reptile: perentie
    })
})

export default reptileRouter