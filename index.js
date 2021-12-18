import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// components
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

// app.use(express.static(path.join(__dirname, "/client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

Connection();
const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

DefaultData();
