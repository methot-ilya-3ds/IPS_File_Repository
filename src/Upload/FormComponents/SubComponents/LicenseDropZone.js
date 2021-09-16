import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";
import { Img } from "react-image";
import dropZone from "../../../Images/dropZone.png";
import placeholder from "../../../Images/placeholder.png";


const LicenseDropZone = () => {
  const {License, setLicense} = useContext(ModelContext);

  const SetLicense = (e) => {
    setLicense(e.target.value);
  }
  return (
    <div className="Form-Column Centered drop-zone" id="drop-zone-license">
      <Img
        className="Form-Row Centered drop-zone-license"
        src={[dropZone, placeholder]}
      ></Img>
      <br />
      <div id="drop-zone-thumbnail-text" className="Form-Row Centered">
        License File
      </div>
    </div>
  );
};

export default LicenseDropZone;
