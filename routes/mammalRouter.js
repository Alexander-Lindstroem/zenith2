import express from "express";
import { mammals } from '../data/animalData.js';
const mammalRouter = express.Router();

mammalRouter.get("/", (req, res) => {
  res.render("pages/animal", {
    pageType: "mammals",
    headTitle: "Mammals",
    title: "Mammals",
    subtitle: "Our mammals",
    bodyClass: "mammals-body",
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
      pageType: "mammals",
      headTitle: "Mammals",
      title: animal.name,
      subtitle: animal.description,
      image: `/assets/images/${animal.imageFilename}`,
      bodyClass: "mammals-body",
      mammal: animal.name,
    });
  } 
});

export default mammalRouter;
