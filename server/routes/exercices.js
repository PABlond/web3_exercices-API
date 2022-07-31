import express from "express";
import { addresses } from "../config";
import { getPairsController } from "./exercices.controller";

const router = express.Router();

router.get("/1", async (req, res) => {
  const { USDC, USDT } = addresses.tokens;
  return res.json(await getPairsController(USDT, USDC));
});

router.get("/2", async (req, res) => {
  return res.json("Depuis la paire USDT/USDC sur trader joe, appeler la fonction getReserves et afficher le résultat ici");
});

export default router;
