import express from "express";
import { addUserController, getAllUserController, getByNameUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post('/', (req, res) => {
  addUserController.run(req, res)
    .then(() => {
     return null;
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

userRouter.get('/', (req, res) => {
  getAllUserController.run(req, res)
    .then(() => {
    return null;
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

userRouter.get("/search", (req, res) => {
  getByNameUserController.run(req, res)
    .then(() => {
    return null;
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});