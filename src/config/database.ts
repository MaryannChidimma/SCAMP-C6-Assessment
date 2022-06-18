import mongoose from "mongoose";
import constants from "../config/constants";

function databse() {
  mongoose.connect(constants.DATABASE_URI!, {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
    .then(() => {
      console.log("::: Connected to database");
    })
    .catch((err: Error) => {
      console.log("There was an error, could not connect to database.");
    });
}

export default databse;
