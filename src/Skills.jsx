import SkillItems from "./SkillItems"
export default function Skills(){
    const skill={
        skills:[
            {
                title:"Programming Languages",
                items:["C Language","Python","Java"],
            },
            {
                title:"Backend Technologies",
                items:["PHP","NodeJs","MySQL"]
            },
            {
                title:"Frontend Technologies",
                items:["HTML","CSS","JavaScript","ReactJs"]
            },
            {
                title:"Others",
                items:["DSA(Intermediate)","Git/GitHub"]
            }
        ]
    }
    return <div className="skills">
        <div className="skills-content">
            <h1>Skills & Technologies</h1>
            <p>A comprehensive toolkit ready to tackle modern web development challenges</p>
            <div className="skill-types">
            {
                skill.skills.map((element)=>{
                    return <div key={element.title} className="skill-type-items">
                        <SkillItems title={element.title} items={element.items}/>
                    </div>
                })
            }
            </div>
        </div>
    </div>
}