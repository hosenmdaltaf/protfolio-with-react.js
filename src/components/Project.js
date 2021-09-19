import React from 'react'

const Project = () => {

  let descripation=[
    {title:'AI Power Social Bloging Site',
    subtitle:['Python','Django','JavaScript','Bootstarp','Html&css'],
    projectdes:`It's a fullstack django based production ready application  Lots of feature including real-time chat.I add machine learing Algorithm
    so that it can suggest blog other user write  by seeing there surfing`,
    image:'./Ai-project.png',
},

    {title:'Blog with Next.js and DRF',
    subtitle:['Python','Django','JavaScript','Bootstarp','Html&css','Next.js'],
    projectdes:`It's a fullstack blog build with django Rest Framework and Next.js from backend drf serve api and
    in front-end Next.js serve the data`,
    image:'./cover.jpg',
    link:'https://github.com/hosenmdaltaf/Social_Media-Application-with-Django'
}
   ]
      
    return (
   <div>  

    {descripation.map((data) => {

        return(    
            

     <div class="main-layer">
        <img class="imagesforproject" src={data.image} alt="Ai-project.png" />
            <div class="second-layer">
                <h3 class="title">{data.title}</h3>
                <div  class="sub-title">
                    {data.subtitle.map(
                        (subData)=>{
                            return(
                                <h6>{subData}</h6>
                                )})}
                </div>
                <div class="project-description">
                    <p>{data.projectdes}</p>
                </div>
                <div class="project-icon">
                    <ul>
                        <li><a href="#">  <i class='bx bx-link'></i></a></li>
                        <li> <a href={data.link}>  <i class='bx bxl-github'></i></a></li>
                    </ul>
                </div>
            {/* <!--finish second-layer  ---> */}
            </div>
        {/* <!--finish main-layer ---> */}
     </div>

        )})
    }
        
</div>
    )
}

export default Project