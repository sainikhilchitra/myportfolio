import EducationItems from "./EducationItems";
import Certifications from "./Certifications"
export default function Education(){
    const education={
        items:[
            {
                title:"Bachelor of Technology in Computer Science and Data Science",
                name:"B V Raju Institute of Technology",
                year:"2023 - 2027",
                grade:"9.28 CGPA",
                description: "Currently pursuing core subjects in computer science and data science, including programming, data structures, machine learning, and database systems. Actively involved in technical projects and coding activities."
            },
            {
                title:"Intermediate",
                name:"Sri Chaitanya Junior College",
                year:"2021 - 2023",
                grade:" 97 %",
                description: "Focused on foundational subjects such as Mathematics, Physics, and Chemistry, with a strong academic performance and consistent top scores in internal assessments and board exams."
            },
            {
                title:"School",
                name:"Sai High School",
                year:"2021",
                grade:"10.0 CGPA",
                description: "Maintained strong academic performance across all subjects and actively participated in school-level activities, building a solid foundation for higher education."
            }
        ]
    }
    return<div className="education">
        <h1>Education Details and Certifications</h1>
        <div className="education-certification-content">
            <div className="education-content">
            {
                education.items.map((element)=>{
                    return <div className="education-item" key={element.title}>
                        <EducationItems title={element.title} items={element}/>
                    </div>
                })
            }
            </div>
            <div className="certification-content">
                <Certifications/>
            </div>
        </div>
    </div>
}