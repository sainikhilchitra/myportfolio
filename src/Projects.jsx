import ProjectItems from "./ProjectItems"
export default function Projects(){
    const project={
        items:[
            {
                title:"Trip Scheduler",
                description:"A smart, intuitive trip planning tool that helps users organize travel itineraries with ease. Features day-wise scheduling, activity tracking, real-time weather updates, and streamlined trip management.Keeps track of trips and their time of experience.",
                tech:["HTML","CSS","JavaScript","MySQL","PHP"],
                git:"#",
                video:"#",
                status:"Completed"
            },
            {
                title:"StudyHub",
                description:"A centralized portal that bridges communication between students and teachers. Features include assignment tracking, announcements, and study material sharing for efficient academic collaboration.",
                tech:["HTML","CSS","JavaScript","MySQL","PHP"],
                git:"#",
                video:"#",
                status:"Completed"
            },
            {
                title:"SwiftRide",
                description:"A user friendly platform that enables customers to browse, book, and manage bike rentals with ease. Features include real time availability, rental history tracking, and location-based search for a seamless booking experience.",
                tech:["ReactJs","NodeJs","ExpressJs","MongoDb"],
                git:"#",
                video:"#",
                status:"In Progress"
            }
        ]
    }
    return <div className="project">
        <h1>Projects</h1>
        <p>A showcase of my development journey through various web applications and learning projects</p>
        <div className="project-items">
            {
                project.items.map((element)=>{
                    return <ProjectItems project={element}/>
                })
            }
        </div>
    </div>
}