import mongoose from "mongoose";

const Connection = async () => {
  try {
    const url = `mongodb+srv://OneWord:Oneword@oneword.yur6i.mongodb.net/ONEWORD?retryWrites=true&w=majority`;
    // mongodb+srv://OneWord:<password>@oneword.yur6i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    await mongoose.connect(url, { useNewUrlParser: true });
    console.log("database connected sucessfully :)");
  } catch (error) {
    console.log("error while ty[ing with database", error);
  }
};

export default Connection;
