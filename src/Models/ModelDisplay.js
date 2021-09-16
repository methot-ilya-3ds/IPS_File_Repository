import { Img } from "react-image";
import placeholder from "../Images/placeholder.png";
import "@google/model-viewer";
import Astronaut from "./Public/Astronaut.glb"

export const Model = ({
  name,
  path,
  imagePath,
  licensePath,
  industry,
  owner,
  description,
  date
}) => {
  return (
    <>
      <div class="Download-Item">
        <model-viewer
            className="Download-Item-Image"
            id="astronaut"
            camera-controls
            auto-rotate
            loading="eager"
            interaction-prompt="none"
            src= {path}
            autoplay= 'true'
            alt="A 3D model of an astronaut"
            post={placeholder}
            ar
          ></model-viewer>
        <div class="Download-Item-InfoText">
          <li class="Download-Item-InfoText-row-name">{name}</li>
          <li className="Download-Item-InfoText-row">{owner}</li>
          <li className="Download-Item-InfoText-row">{industry}</li>
          <li className="Download-Item-InfoText-row">{date}</li>

        </div>
      </div>
    </>
  );
};
