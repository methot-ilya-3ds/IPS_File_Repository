import React, {useContext, useEffect, useState} from "react";
import "../CSS/Download.css";
import { Model } from "../Models/ModelDisplay.js";
import { ModelsContext } from "../Models/ModelsContext";
import background from "../Images/Background.png";
import Astronaut from "../Models/Public/Astronaut.glb"

export const Download = () => {

  const [models, setModels] = useState([]);

  useEffect(() => {
    getModels();
  }, []);

  const getModels = async () => {
    const response = await fetch("http://192.168.86.174:3000/post");
    const data = await response.json();
    console.log(data);
    setModels(data);
  }

  //const [models, setModels] = useContext(ModelsContext);

  return (
    <div id="Content" style={{ backgroundImage: `url(${background})` }}>
      <div id="DownloadItems">
        {models.map(model => (
          <Model
            name={model.title}
            owner={model.owner}
            industry={model.industry}
            path={'http://192.168.86.174:3000/download:' + model.title}
            date={model.date}
          ></Model>
        ))}
      </div>
    </div>
  );
};

export default Download;
