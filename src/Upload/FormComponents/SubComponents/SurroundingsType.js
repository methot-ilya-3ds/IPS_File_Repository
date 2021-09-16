import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";

const SurroundingsType = () => {

  const {Surroundings, setSurroundings} = useContext(ModelContext);

  const SetSurroundings = (e) => {
    setSurroundings(e.target.value);
  }

  return (
    <div className="Form-Row Wrap ">
      <label className="Form-Row Centered">Choose Surroundings Type</label>
      <select required className="Form-Row Half" onChange={SetSurroundings}>
        <option disabled selected value>
          {" "}
          -- select an option --{" "}
        </option>
        <option value="HDRI">HDRI</option>
        <option value="v">360 Image</option>
        <option value="3D">3D</option>
      </select>
    </div>
  );
};

export default SurroundingsType;
