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

// mammalRouter.get("/:mammalName", (req, res) => {
//   const { mammalName } = req.params;
//   const mammalData = mammals[mammalName];

//   res.render("/animal", {
//     ...baseData,
//     mammalData: mammalData,
//   });
// });

export default mammalRouter;
