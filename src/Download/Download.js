import React, { memo } from 'react'
import data from './Models/Models.json'
import './Download.css' 
import {Model} from './Models/Model.js'
import background from '../Images/Background.png';

export default memo(function Download() {
    return (        
        <>
                <div id="Content" style={{backgroundImage: `url(${background})`}}>            
                    <div id="DownloadItems">                                                
                            {data.map((data, key) => {
                                return (
                                    <div key={key}>
                                    <Model
                                        key = {key}
                                        name = {data.name}
                                        path = {data.path}
                                        image = {data.image}
                                        license = {data.license}
                                        industry = {data.industry}
                                        ip = {data.ip}
                                        description = {data.description}
                                    />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
        </>
    )
})
