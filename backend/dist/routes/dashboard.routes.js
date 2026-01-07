"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolio_service_1 = require("../services/portfolio.service");
const router = (0, express_1.Router)();
router.get("/dashboard", async (_, res) => {
    try {
        const data = await (0, portfolio_service_1.getPortfolio)();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to load portfolio" });
    }
});
exports.default = router;
