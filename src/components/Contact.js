import {useState} from 'react'

function Contact() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handlePost=(e)=>{
        e.preventDefault();
        alert(
            `${fullname},${email}`
        )
    }

    return (
        <div id="main-dashboard-content">

<section class="section gray-bg" id="contactus">
  <div class="container">
      <div class="row">
          <div class="col-lg-6">
              <div class="section-title">
                  <h2 class="title-for-all-header">Get In Touch</h2>
                  <p>I am a newbie software engineer.Waiting for enter in software indursty</p>
              </div>
          </div>
      </div>
      <div class="row flex-row-reverse">
          <div class="col-md-7 col-lg-8 m-15px-tb">
              <div class="contact-form">
                   <form onSubmit={handlePost} class="contactform contact_form" id="contact_form">
                      <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                      <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                      <div class="row">
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input id="name" type="text" placeholder="Full Name" class="form-control"
                                  value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="form-group">
                                  <input id="email" type="text" placeholder="Email Address" class="form-control"
                                  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                              </div>
                          </div>
                          <div class="col-12">
                              <div class="form-group">
                                  <input id="subject" type="text" placeholder="Subject" class="form-control"
                                  value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="form-group">
                                  <textarea id="message" placeholder="Message" class="form-control" rows="3"
                                  value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                              </div>
                          </div>
                          <div class="col-md-12">
                              <div class="send">
                                  <a id="send_message" class="px-btn theme" ><input id="send_message" class="px-btn theme"  type="submit" value="submit" /></a>
                              </div> 
                          </div>
                      </div>
                  </form>
              </div>
          </div>
          <div class="col-md-5 col-lg-4 m-15px-tb">
              <div class="contact-name">
                  <h5>Mail</h5>
                  <p>altafhm2000@gmail.com</p>
              </div>
              <div class="contact-name">
                  <h5>Here I am</h5>
                  <p>Dhaka, Bangladesh</p>
              </div>
              <div class="contact-name">
                  <h5>Phone</h5>
                  <p>+8801880871297</p>
              </div>
              <div class="social-share nav">
                   <a href="https://www.linkedin.com/in/hosen-md-altaf-06922a15a/"><i class='bx bxl-linkedin'></i></a>
                 <a href="https://github.com/hosenmdaltaf"><i class='bx bxl-github'></i></a>
                 <a href="mailto:hosenmdaltaf1999@outlook.com"><i class='bx bx-envelope-open' ></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100008099341022"><i class='bx bxl-facebook'></i></a>

              </div>
          </div>
      </div>
  </div>
</section>
            
        </div>
    )
}

export default Contact
