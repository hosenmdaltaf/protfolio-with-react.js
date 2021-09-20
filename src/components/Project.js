import React from 'react'

const Project = () => {

  let descripation=[
    {title:'AI Power Social Bloging Site',
    subtitle:['Python','Django','JavaScript','Bootstarp','Html&css'],
    projectdes:`It's a fullstack django based production ready application  Lots of feature including real-time chat.I add machine learing Algorithm
    so that it can suggest blog other user write  by seeing there surfing`,
    image:'./Ai-project.png',
    linkGithub:'https://github.com/hosenmdaltaf/Social-bloging-system-with-Django',
    linkLiveProject:'https://blogwithnextjs.netlify.app'
},

    {title:'Blog with Next.js and DRF',
    subtitle:['Python','Django','JavaScript','Bootstarp','Html&css','Next.js'],
    projectdes:`It's a fullstack blog build with django Rest Framework and Next.js from backend drf serve api and
    in front-end Next.js serve the data`,
    image:'./blogwithnextanddrf.png',
    linkGithub:'https://github.com/hosenmdaltaf/Social_Media-Application-with-Django',
    linkLiveProject:'https://blogwithnextjs.netlify.app'
},

    {title:'Blog with pure Django',
    subtitle:['Python','Django','JavaScript','Bootstarp','Html&css'],
    projectdes:`It's a fullstack blog build with pure django as backend and in frontend html&css,javascript with user 
    authentication only registered user can create post.Fully CRUD operation also implemented.`,
    image:'./blog with django.png',
    linkGithub:'https://github.com/hosenmdaltaf/BlogApp-Django',
    linkLiveProject:'https://simple-blog-with-django.herokuapp.com/'
},
   ]
      
    return (
   <div>  

    {descripation.map((data) => {

        return(    
            

     <div class="main-layer">
        <img class="imagesforproject" src={data.image} alt="altaf" />
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
                        <li><a href={data.linkLiveProject}>  <i class='bx bx-link'></i></a></li>
                        <li> <a href={data.linkGithub}>  <i class='bx bxl-github'></i></a></li>
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
