/*
This is a object with a nested array that holds more objects
 * 1.) imageLocation = Image path
 * 2.) alternativeText = alt text so, if the image wont load it will display this text.
 * 3.) itemName = Item number.
 * 4.) modelCost = Cost of the equipment.
 * 5.) imageSize = Controls the image size with this value.
 */
import Image1 from "./Images/Cat-777.jpeg";
import Image2 from "./Images/Cat-MD6310.jpeg";
import Image3 from "./Images/Cat-PM820.jpeg";
const productData = {
  productModel: [
    {
      imageLocation:
        Image1/*"../Images/Cat-777.jpeg" /Images/Cat-777.jpeg/Cat-777.jpeg*/,
      alternativeText: "777 Off-highway Truck",
      itemName: "MD777",
      modelCost: 7000000,
      imageSize: 90,
    },
    {
      imageLocation: Image2,
      alternativeText: "MD6310 Rotary Drill",
      itemName: "MD6310",
      modelCost: 700000,
      imageSize: 90,
    },
    {
      imageLocation: Image3,
      alternativeText: "Cold Planer milling machine",
      itemName: "PM820",
      modelCost: 800000,
      imageSize: 90,
    },
  ],
};
export default productData;
