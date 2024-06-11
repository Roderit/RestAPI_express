import { Router } from "express";
const router = Router();

router.get("/home", (req, res)=>{
    res.render("index.ejs", {title: "First Website with node"});
});

router.get("/about", (req, res)=>{
    res.render("about.ejs", {title: "About me"});
});

router.get("/contact", (req, res)=>{
    res.render("contact.ejs", {title: "Contact page"});
});

export default router;