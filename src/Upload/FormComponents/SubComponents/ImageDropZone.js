import React, { useState, useEffect, useRef } from "react";
import dropZone from "../../../Images/dropZone.png";
import placeholder from "../../../Images/placeholder.png";

const ImageDropZone = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [validFiles, setValidFiles] = useState([]);
  const modalImageRef = useRef();
  const [image, setImage] = useState([]);

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file, current) => {
      const x = file.find((item) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

  const dragOver = (e) => {
    e.preventDefault();
    modalImageRef.current.style.backgroundImage = `url(${placeholder})`;
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
    modalImageRef.current.style.backgroundImage = `url(${dropZone})`;
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles([]);
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        openImageModal(files[i]);
      } else {
        files[i]["invalid"] = true;
        setErrorMessage("File type not permitted");
        setSelectedFiles([]);
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        modalImageRef.current.style.backgroundImage = `url(${dropZone})`;
      }
    }
  };

  const validateFile = (file) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileSize = (size) => {
    if (size === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
      fileName
    );
  };

  const openImageModal = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
      setImage([]);
      setImage((image) => [...image, e.target.result]);
    };
  };

  return (
    <div className="Form-Column">
      <label className="Form-Row ">Choose File Preview Image</label>
      <div
        ref={modalImageRef}
        className="Form-Column drop-zone Centered modal-image"
        id="drop-zone-thumbnail"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        style={{ backgroundImage: `url(${dropZone})` }}
      ></div>

      {validFiles.map((data, i) => (
        <div className="file-status-bar Centered">
          <div className="file-type-logo"></div>
          <div className="file-type">{fileType(data.name)}</div>
          <span className={`file-name ${data.invalid ? "file-error" : ""}`}>
            {data.name}
          </span>
          <span className="file-size">({fileSize(data.size)})</span>
          {data.invalid && (
            <span className="file-error-message">({errorMessage})</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageDropZone;