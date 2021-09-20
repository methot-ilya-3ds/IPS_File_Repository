import React, { useState, useEffect, useRef, useContext } from "react";
import dropZone from "../../../Images/dropZone.png";
import placeholder from "../../../Images/placeholder.png";
import { ModelContext } from "../../../Models/ModelContext";

const FileDropZone = () => {

  const {File, setFile} = useContext(ModelContext);

  const  onFilesAdded = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <>
    <label className= "Form-Row">Add Model File</label>
    <input className="Form-Input Form-Row" type="file" name="files" onChange={onFilesAdded}></input>
    </>
      //   onClick={openFileDialog}
      //   className="drop-zone-container"
      // >
      //   <input
      //     ref={fileInputRef}
      //     type="file"
      //     multiple
      //     onChange={onFilesAdded}
      //   />
      //   <div className="drag-files">
      //     Drag files to upload
      //   </div>
      // </div>
    );
};

export default FileDropZone;