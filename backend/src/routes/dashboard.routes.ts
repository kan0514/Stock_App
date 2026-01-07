import { Router } from "express";
import { getPortfolio } from "../services/portfolio.service";

const router = Router();

router.get("/dashboard", async (_, res) => {
  try {
    const data = await getPortfolio();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to load portfolio" });
  }
});

export default router;
