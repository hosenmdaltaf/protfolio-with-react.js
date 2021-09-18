import React from 'react'

function Navbar() {
    return (
        <>
        
          <section id="sidebar">
            <section className="title-container">
              <img src="aa.jpg" width="40px" alt="logo" />

              <h1>Altaf</h1>
            </section>
            <hr/>
            <section className="links-container">

          <a href="#main-dashboard-content" className="nav__link active">
              <div className="links">
                <div className="icon">
                  <i className='bx bxs-home'></i>
                </div>
                <span>Home</span>
              </div>
            </a>

          <a href="#about" className="nav__link">
              <div className="links">
                <div className="icon">
                  <i ><img className="sidebar-icon-img" src ="about.png"/></i>
                </div>
                <span>About</span>
              </div>
            </a>
                <a href="#Skills-secation" className="nav__link">
              <div className="links">
                <div className="icon">
                  <i  ><img className="sidebar-icon-img" src="icons8-visualization-skill-24.png"/></i>
                </div>
                <span>Skills</span>
              </div>
            </a>

              <a href="#projects-part" className="nav__link">
              <div className="links">
                <div className="icon">
                <i ><img className="sidebar-icon-img" src ="icons8-project-24.png"/></i>
                </div>
                <span>Projects</span>
              </div>
        </a>

        <a href="#contactus" className="nav__link">
              <div className="links">
                <div className="icon">
                <i className='bx bxs-contact'></i>
                </div>
                <span>Contact</span>
              </div>
                </a>

              <a href="#" className="nav__link">
              <div className="links">
                <div className="icon">
                    <i className='bx bxl-blogger'></i>
                </div>
                <span>Blog</span>
              </div>
                </a>

        </section>

          <hr/>
            <section className="title-container">
              <a href="https://drive.google.com/file/d/1LUemOr-GFBjCn3n55yZXW1ynQWJ7nH_n/view?usp=sharing" className="nav__link">
              <div className="links">
                <div className="icon">
                  <i> <img className="sidebar-icon-img" src="resume.png"/></i>
                </div>
                <h1>Resume</h1>
              </div>
                </a>
            </section>

        </section>
            
    </>
    )
}

export default Navbar
