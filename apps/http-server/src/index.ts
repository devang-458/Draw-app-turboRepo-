import express from "express";
import cors from "cors";
import router from "./router/router";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi from my world");
});

app.use("/api/v1", router);

app.listen(3002, () => {
  console.log("server is running");
});
