import { data } from "./constants/data.js";
import News from "./modal/news.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);

    console.log("Your Data imported sucessfully great!  ");
  } catch (error) {
    console.log("Error in default", error.message);
  }
};

export default DefaultData;
