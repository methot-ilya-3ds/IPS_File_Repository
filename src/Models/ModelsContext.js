import React, {useState, createContext} from 'react'

export const ModelsContext = createContext();

export const ModelsProvider = (props) => {
    const [models, setModels] = useState([
        {
            "name": "TEst TEst TEst",
            "path": "DATA/Videos/.Rhistory",
            "image": "DATA/Videos/.Rhistory",
            "license": ".Rhistory",
            "industry": ".Rhistory",
            "ip": "something",
            "description": "something"
        },
        {
            "name": "2021-06-29_15-11-28",
            "path": "DATA/Models/2021-06-29_15-11-28.png",
            "image": "DATA/Models/2021-06-29_15-11-28.png",
            "format": "png",
            "industry": "Life Sciences and Healthcare",
            "ip": "Customer-Facing"
        },
        {
            "name": "TEALS Program Volunteer information_l1",
            "path": "DATA/Models/TEALS Program Volunteer information_l1.jpg",
            "image": "DATA/Models/TEALS Program Volunteer information_l1.jpg",
            "format": "jpg",
            "industry": "Business Services",
            "ip": "VS Partners Confidential"
        }
    ]);
    return (
        <ModelsContext.Provider value={[models, setModels]}>
            {props.children}
        </ModelsContext.Provider>
    );
}