
import React, {useContext} from "react";
import { ModelContext } from "../../../Models/ModelContext";


const ChooseConfidentiality = () => {
  
  const {Confidentiality, setConfidentiality} = useContext(ModelContext);

  const updateConfidentiality = (e) => {
    setConfidentiality(e.target.value);
  }

  return (
    <div className="Form-Row Wrap ">
      <label className="Form-Row">Choose Confidentiality</label>
      <select required className="Form-Row Confidentiality" onChange={updateConfidentiality}>
        <option disabled selected value >
          {" "}
          -- select an option --{" "}
        </option>
        <option value="Customer-Facing">Customer-Facing</option>
        <option value="Show-Customer Do-Not-Distribute">
          Show-Customer Do-Not-Distribute
        </option>
        <option value="DS Confidential">DS Confidential</option>
        <option value="VS Partners Confidential">
          VS Partners Confidential
        </option>
      </select>
    </div>
  );
};

export default ChooseConfidentiality;