import express, { Router } from "express";
import jwt from "jsonwebtoken";
import { CreateUserScehma } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const router: Router = express.Router();

router.post("/signup", async (req, res) => {
  const parsedData = CreateUserScehma.safeParse(req.body);
  if (!parsedData.success) {
    console.log(parsedData.error);
    res.json({
      message: "Incorrect Input",
    });
  }

  try {
    const user = await prismaClient.
  } catch (err) {
    console.log("");
  }
});

router.post("/signin", (req, res) => {});

router.post("/room", (req, res) => {});

export default router;
