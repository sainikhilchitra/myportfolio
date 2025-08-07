import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
export default function SkillItems(props){
    let symbol;
    if(props.title === 'Frontend Technologies'){
        symbol=faCode;
    }
    else if(props.title === 'Programming Languages'){
        symbol=faKeyboard;
    }
    else if(props.title === 'Backend Technologies'){
        symbol=faDatabase;
    }
    else{
        symbol=faGlobe;
    }
    return<>
        <div className="skill-header">
            <FontAwesomeIcon icon={symbol} className="icon"/>
            <h3>{props.title}</h3>
        </div>
        <div className="skill-icons">
        {
            props.items.map((element,idx)=>{
                return <p key={idx} className="skill-element">{element}</p>
            })
        }
        </div>
    </>
}