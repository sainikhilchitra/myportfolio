import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
export default function certifications(){
    const certificates=[
        {
            name:"Problem Solving through Programming in C",
            from:"IIT Kharagpur (NPTEL)",
            year:"2024"
        },{
            name:"Data Structures and Algorithms using Java",
            from:"IIT Kharagpur (NPTEL)",
            year:"2024"
        },{
            name:"Python for Data Science",
            from:"IBM",
            year:"2024"
        },{
            name:"Introduction to Machine Learning",
            from:"IIT Madras (NPTEL)",
            year:"2025"
        },{
            name:"HTML and CSS",
            from:"Infosys Springboard",
            year:"2025"
        }
    ]
    return <>
            <h1><FontAwesomeIcon icon={faFileAlt} /> Certifications</h1>
        {
            certificates.map((element)=>{
                return<div className="certification-items" key={element.name}>
                    <h3>{element.name}</h3>
                    <p className="institute-name">{element.from}</p>
                    <p className="badge">{element.year}</p>
                </div>
            })
        }
    </>
}