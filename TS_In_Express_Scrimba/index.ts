// import pets from "./"
import express from "express";
import type { Express, Response, Request, NextFunction } from "express";

import cors from "cors";
import { pets, type Pet } from "./src/types/pets";
const app = express();

// app.get("/", (req: Request, res: Response): void => {
//   res.json({ data: pets });
// });

app.get("/",(req :Request, res : Response, next:NextFunction)=>{
  const {species} = req.query
  if(species){
    let specieSpecificPets : Pet[] = pets.filter(pet=>pet.species===species)
    res.status(200).json({data: {pets: specieSpecificPets}})
    return ;
  }
    res.status(404).json({error: "resource not found"})
    next()
}) 

app.listen(8000, () =>
  console.log("express server is working on port : ", 8000),
); 
