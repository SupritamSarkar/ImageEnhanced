
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreviwe from "./ImagePreviwe";
import Loading from "./Loading";
import Midsection1 from "./Midsection1";
import Midsection2 from "./Midsection2";
import Footer from "./Footer";
import {enhancedImageAPI} from "../utils/enhancedImageAPI";
import Process from "./Process";




const Home = () => {
  const [uploadImage ,setuploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);


const uploadImageHandler = async (file) => {
  if (!file) {
    alert("Please select an image file to upload.");
    return;
  }
  setuploadImage(URL.createObjectURL(file));
  setloading(true);

    try {
      const enhancedURl = await enhancedImageAPI(file);
      setenhancedImage(enhancedURl);
      setloading(false);

    } catch (error) {
      console.log(error);
      alert("Error while enhancing image, please try again later.");
      setloading(false);
    }


  
}

  return (
    <>

       <ImageUpload  uploadImageHandler={uploadImageHandler} />
       <ImagePreviwe 
        loading={loading} 
       uploaded={uploadImage} 
       enhanced={enhancedImage?.image} />
       
       <Midsection1/>
        <Midsection2/>
        <Process/>
        <Footer/> 
      
    </>
  )
}

export default Home
