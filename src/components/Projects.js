import {useState} from 'react'
import Project from './Project'

function Projects() {

// const[project,setProject]=(<Project/>)


// console.log(project)
   const  hideShow=()=>{
       if(<Project/> >2){
           console.log('Too much')
       }

    }
    return (
        <div id="main-dashboard-content">

<h1 class="project-h1 title-for-all-header">Some Of My Works</h1>

<section value="1" id="projects-part" >

<Project />
{/* <section id="hide-projects">
// {/* <Project/> */}

 {/* </section>  */}

<div id="project-button" class="project-button ">

    <button onClick={hideShow}>See More</button>

</div>

{/* <!--finish the project seaction ---> */}

</section>
            
        </div>
    )
}

export default Projects
