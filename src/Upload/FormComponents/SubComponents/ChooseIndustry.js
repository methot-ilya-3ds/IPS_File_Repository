import { ModelContext } from "../../../Models/ModelContext";
import React,{useContext } from "react";

const ChooseIndustry = () => {
  const {Industry, setIndustry} = useContext(ModelContext);

  const SetIndustry = (e) => {
    setIndustry(e.target.value);
  }
  return (
    <div required className="Form-Row Wrap ">
      <label className="Form-Row ">Choose Industry</label>
      <select required className="Form-Row Industry" onChange={SetIndustry} defaultValue="">
        <option disabled value="" >
          {" "}
          -- select an option --{" "}
        </option>
        <option value="Transportation and Mobility">
          Transportation and Mobility
        </option>
        <option value="Aerospace and Defense">Aerospace and Defense</option>
        <option value="Marine and Offshore">Marine and Offshore</option>
        <option value="Industrial Equipment">Industrial Equipment</option>
        <option value="High-Tech">High-Tech</option>
        <option value="Home and Lifestyle">Home and Lifestyle</option>
        <option value="High-Tech">High-Tech</option>
        <option value="Consumer Packaged Goods">Consumer Packaged Goods</option>
        <option value="Life Sciences and Healthcare">
          Life Sciences and Healthcare
        </option>
        <option value="Construction, Cities, and Territories">
          Construction, Cities, and Territories
        </option>
        <option value="Business Services">Business Services</option>
      </select>
    </div>
  );
};

export default ChooseIndustry;
