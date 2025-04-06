import axios from "axios";

const API_KEY = "wxkaf7pf5xzjk1d3c";




export const enhancedImageAPI = async (file) => {
   
    try{
        const taskId = await uploadImage(file);
        console.log(" Image uoloaded, Task ID:", taskId);

        // Polling for the task status
        const enhancedImageData = await pollTaskStatus(taskId);
        console.log("Enhanced Image Data:", enhancedImageData);

        

        return enhancedImageData;

    }
    catch (error) {
        console.error("Error enhancing image:", error.message);
        throw error;
    }

  }


  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

   const {data} =  await axios.post("https://techhk.aoscdn.com/api/tasks/visual/scale", formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });

    if(!data?.data?.task_id) {
      throw new Error("Image upload failed. Please try again.");
    }

     return data.data.task_id;
  }

  const fetchEnhancedImage = async (taskId) => {

    const {data} =  await axios.get(`https://techhk.aoscdn.com/api/tasks/visual/scale/${taskId}`,{

      headers: {

          "X-API-KEY": API_KEY,
      },
  });

  if(!data?.data) {
    throw new Error("Image enhancement failed. Please try again.");
  }
 return data.data;

  }

  const pollTaskStatus = async (taskId, retries =0) => {
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){

      console.log("Processing...");

    if(retries>=10){
      throw new Error("Max retries reached. Please try again.");
    }

    //wait for 5 seconds before polling again
    await new Promise(resolve => setTimeout(resolve, 5000));

    return pollTaskStatus(taskId, retries + 1);
    }
    console.log("Image enhanced successfully!",result);
    return result;

  }



