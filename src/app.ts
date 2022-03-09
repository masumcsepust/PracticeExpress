import cors from "cors";
import express, { Request,   Response, NextFunction } from "express";
import { createConnection } from "typeorm";
import { routes } from "./routes/route";
import 'reflect-metadata';


  createConnection({
    "type": "sqlite",
    "database": "prac.db",
    "synchronize": true,
    "logging": true,
    "entities": [ 
      "src/entity/*.ts" 
    ],
  }).then( connection => {
  const app = express();
  const port = 3000;

  app.use(cors({
    origin: 'http://localhost:4200'
  }));
  app.use('/public/images',express.static('public/images'));
  app.use(express.json());
  app.use(routes);

  app.listen(port, () => {
      console.log(`Listing on port ${port}.`);
    })
  });