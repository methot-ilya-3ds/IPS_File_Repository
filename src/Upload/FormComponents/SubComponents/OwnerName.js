import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";

const OwnerName = () => {
  const {Owner, setOwner} = useContext(ModelContext);

  const SetOwnerName = (e) => {
    setOwner(e.target.value);
  }

  return (
    <>
      <label for="input" className="Form-Row ">
        Type your name
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
        onChange={SetOwnerName}
      />
    </>
  );
};

export default OwnerName;