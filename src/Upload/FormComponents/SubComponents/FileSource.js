import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";

const FileSource = () => {
  const {path, setPath} = useContext(ModelContext);

  const SetFileSource = (e) => {
    setPath(e.target.value);
  }

  return (
    <>
      <label for="input" className="Form-Row ">
        Type wiki url
      </label>
      <input
        className="Form-Input Form-Row Name"
        id="input"
        required=""
        autocomplete="off"
        placeholder=""
        autocapitalize="none"
        autocorrect="off"
        aria-describedby=""
        aria-labelledby="paper-input-label-1"
        tabIndex="0"
        name="name"
        type="text"
        onChange={SetFileSource}
      />
    </>
  );
};

export default FileSource;