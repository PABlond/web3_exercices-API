import express from "express";
import { addresses } from "../config";
import { getPairsController } from "./exercices.controller";

const router = express.Router();

router.get("/1", async (req, res) => {
  
  const { USDC, USDT } = addresses.tokens;
  return res.json(await getPairsController(USDT, USDC));
});

export default router;


