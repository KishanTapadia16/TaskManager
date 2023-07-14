const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error-handler");
//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
const port = process.env.PORT || 3000;

app.use(notFound);
app.use(errorHandler);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
