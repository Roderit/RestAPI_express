import express from "express";

import indexRoutes from "./routes/routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(indexRoutes);

app.use(express.static("./src/public"));

app.listen(4000, (req, res)=>{
    console.log("app corriendo en puerto 4000");
});