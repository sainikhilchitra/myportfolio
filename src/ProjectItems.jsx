import React, { useState } from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function ProjectItems(props){
    const [showPreview, setShowPreview] = useState(false);
    return<div className="project-item-types" key={props.project.title}>
        <div>
            <img src="/project.jpg" alt={props.project.title} onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}/>
        </div>
        <button className="project-preview" style={{ visibility: showPreview ? 'visible' : 'hidden' }} onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}>Preview</button>    
        <h2>{props.project.title}</h2>
        <h6 className="project-status">{props.project.status}</h6>
        <div className="project-tech">
            {
                props.project.tech.map((element)=>{
                    return <p key={element}>{element}</p>
                })
            }
        </div>
        <p>{props.project.description}</p>
        <div className="project-buttons">
            <button><FontAwesomeIcon icon={faGithub}/>Code</button>
            <button><FontAwesomeIcon icon={faVideo}/>Demo</button>
        </div>
    </div>
}