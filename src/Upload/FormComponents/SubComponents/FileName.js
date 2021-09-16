import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";

const FileName = () => {
  const {FileName, setName} = useContext(ModelContext);

  const SetFileName = (e) => {
    setName(e.target.value);
  }

  return (
    <>
      <label for="input" className="Form-Row ">
        Type file name
      </label>
      <input
        className="Form-Input Form-Row Name"
        id="input"
        required=""
        autoComplete="off"
        placeholder=""
        autoCapitalize="none"
        autoCorrect="off"
        aria-describedby=""
        aria-labelledby="paper-input-label-1"
        tabIndex="0"
        name="name"
        type="text"
        onChange={SetFileName}
      />
    </>
  );
};

export default FileName;