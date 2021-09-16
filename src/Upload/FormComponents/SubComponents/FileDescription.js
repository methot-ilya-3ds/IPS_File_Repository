import React, {useContext} from 'react'
import { ModelContext } from "../../../Models/ModelContext";

const FileDescription = () => {
  const {Description, setDescription} = useContext(ModelContext);

  const SetDescription = (e) => {
    setDescription(e.target.value);
  }

      return (
        <div className="Form-Row Wrap ">
          <label for="input" className="Form-Row Centered">
            Description
          </label>
          <textarea
            className="Form-Input Form-Row Wrap Description"
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
            onChange={SetDescription}
          ></textarea>{" "}
        </div>
      );
}

export default FileDescription;