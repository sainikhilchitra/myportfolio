import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
export default function EducationItems(props){
    return <>
            <h2><span><FontAwesomeIcon icon={faGraduationCap}/></span>{props.title}</h2>
        {
            <div className='education-desc'>
                    <p>{props.items.description}</p>
                    <p><h3>Institution:</h3> {props.items.name}</p>
                    <p><h3>Year of Pass:</h3> {props.items.year}</p>
                    <p><h3>Grade:</h3> {props.items.grade}</p>
            </div>
        }
    </>
}