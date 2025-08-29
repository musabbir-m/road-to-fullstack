import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import userRoute from "./modules/user/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "root of the server",
  });
});

async function server() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(` server running on port ${5000}`);
    });
  } catch (error) {
    console.log(` server error ${error}`);
  }
}

server();
