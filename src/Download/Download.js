import React, {useContext, useEffect, useState} from "react";
import "../CSS/Download.css";
import { Model } from "../Models/ModelDisplay.js";
import { ModelsContext } from "../Models/ModelsContext";
import background from "../Images/Background.png";
import Astronaut from "../Models/Public/Astronaut.glb"
<<<<<<< HEAD
import ReactXR from "../ReactXR/ReactXR";
=======
>>>>>>> a6e006bb7c1dc9408a2a81be9f78bb36b84c88fa

export const Download = () => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels();
  }, []);

  const getModels = async () => {
    const response = await fetch("https://env28test.ag.3ds.com/post");
    const data = await response.json();
    console.log(data);
    setModels(data);
  }

  //const [models, setModels] = useContext(ModelsContext);

  return (
    <div id="Content" style={{ backgroundImage: `url(${background})` }}>
      <div id="DownloadItems">
        <ReactXR/>
        {/* {models.map(model => (
          <Model
            name={model.title}
            owner={model.owner}
            industry={model.industry}
            path={'http://192.168.86.174:3000/download:' + model.title}
            date={model.date}
          ></Model>
        ))} */}
      </div>
    </div>
  );
};

export default Download;
