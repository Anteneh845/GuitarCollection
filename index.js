const express = require("express");
const app = express();
const PORT = 4000;

require("./config/db-config");
const guitarRoutes = require("./routes/guitar.route");
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", guitarRoutes);

app.listen(PORT, () => {
    console.log("APp started at " + PORT);
})