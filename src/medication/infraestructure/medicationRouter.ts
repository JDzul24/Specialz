import express from "express";
import { addMedicationController, getAllMedicationController,deleteMedicationController } from "./dependencies";

export const medicationRouter = express.Router();

medicationRouter.post("/", (req, res) => {
    addMedicationController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });
  
  medicationRouter.get("/", (req, res) => {
    getAllMedicationController.run(req, res)
      .then(() => {
          return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

  medicationRouter.delete('/', (req, res) => {
    deleteMedicationController.run(req, res)
      .then(() => {
          return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });