import express from "express";

const mammalRouter = express.Router();

mammalRouter.get("/", (req, res) => {
  res.render("pages/welcome", {
    pageType: "mammals",
    headTitle: "Mammals",
    title: "Mammals",
    subtitle: "Our mammals",
    bodyClass: "mammals-body",
  });
});

mammalRouter.get("/echidna", (req, res) => {
  res.render("pages/animal", {
    pageType: "mammals",
    headTitle: "Mammals",
    title: "echidna",
    subtitle: "Our mammals",
    bodyClass: "mammals-body",
  });
});

mammalRouter.get("/tasmanian-evil", (req, res) => {
  res.render("pages/animal", {
    pageType: "mammals",
    headTitle: "Mammals",
    title: "Tasmanian Devil",
    subtitle: "Our mammals",
    bodyClass: "mammals-body",
  });
});

mammalRouter.get("/quokka", (req, res) => {
  res.render("pages/animal", {
    pageType: "mammals",
    headTitle: "Mammals",
    title: "quokka",
    subtitle: "Our mammals",
    bodyClass: "mammals-body",
  });
});


export default mammalRouter;
