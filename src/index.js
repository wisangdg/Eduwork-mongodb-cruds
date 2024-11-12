import express from "express";
import mongoose from "mongoose";
import { router } from "../routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/eduwork-cruds")
  .then(() => {
    console.log(`connected to database`);
  })
  .catch((err) => {
    console.error(`connection mongodb error: ${err}`);
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
