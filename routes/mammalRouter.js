import express from "express";
import { mammals } from '../data/animalData.js';
const mammalRouter = express.Router();

mammalRouter.get("/", (req, res) => {
  res.render("pages/animal", {
    headTitle: "Mammals",
    headerTitle: "Mammals",
    welcomeMsgTitle: `Welcome to the mammals page!`,
    welcomeMsg: "Australia is home to unique mammals, including marsupials like kangaroos, koalas, and wombats. These animals carry their young in pouches. The platypus and echidna, rare monotremes, lay eggs. Many species, such as the quokka and numbat, are found nowhere else, thriving in Australia's diverse landscapes, from forests to deserts.",
    bodyClass: "mammals-body",
    animalArray: mammals,
    pageType: "mammals"
  });
});

// reusable routing for each mammal
mammalRouter.get("/:mammalUrl", (req, res) => {
  const mammalUrl = req.params.mammalUrl;
  const animal = mammals.find(
    (item) => item.name.toLowerCase() === mammalUrl.toLowerCase()
  );

  if (animal) {
    res.render("pages/animal", {
      headTitle: animal.name,
      headerTitle: "Mammals",
      infoImage: animal.imageFilename,
      infoLifespan: animal.lifespan,
      infoGroup: animal.group,
      infoFood: animal.food,
      infoDesc: animal.description,
      infoLength: animal.length,
      infoWeight: animal.weight,
      infoHabitat: animal.habitat,
      mammal: animal.name,
      animalArray: mammals,
      pageType: "mammals"
    });
  } 
});

export default mammalRouter;
