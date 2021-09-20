import React, { useState, createContext } from "react";

export const ModelContext = createContext();

export const ModelProvider = (props) => {
  const [Name, setName] = useState("");
  const [Owner, setOwner] = useState("");
  const [Industry, setIndustry] = useState("");
  const [File, setFile] = useState([]);

  return (
    <ModelContext.Provider
      value={{
        Name,
        setName,
        Owner,
        setOwner,
        Industry,
        setIndustry,
        File, 
        setFile
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};
