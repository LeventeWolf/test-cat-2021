const express = require("express");
const router = express.Router();
const CatDAO = require('../dao/cat-dao');

router.get("/", async (req, res) => {
    let cats = await new CatDAO().getCats();
    return res.render('index',{ cats : cats });
  });
  
router.post("/add", async (req, res) => {
  let {name} = req.body;
  let {bunda_suruseg} = req.body;
  await new CatDAO().createCat(name, bunda_suruseg);
  return res.redirect('/')
  });
  
router.get("/edit/:id", async (req, res) => {
    let id = req.params.id;
    let cat = await new CatDAO().getOneCat(id);
    res.render("update-cat", { model: cat });
  });
  
router.post("/update/:id", async (req, res) => {
    let id = req.params.id;
    let {name} = req.body;
    let {bunda_suruseg} = req.body;
    await new CatDAO().updateCat(id, name, bunda_suruseg);
    res.redirect("/");
  });
  
router.post("/delete/:id", async (req, res) => {
    let id = req.params.id;
    await new CatDAO().deleteCat(id);
    res.redirect("/");
  });

module.exports = router;