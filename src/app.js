import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.PORT,
    credentials: true,
  })
);

app.use(express.json({ limit: "164kb" }));
app.use(express.urlencoded({ extended: true, limit: "164kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// router
import Userrouter from "./routes/user.routes.js";

app.use("/api/v1/users", Userrouter);

export default app;
