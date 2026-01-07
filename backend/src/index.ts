import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dashboardRoutes from "./routes/dashboard.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("Server is running!");
});

app.use("/api/v1", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
