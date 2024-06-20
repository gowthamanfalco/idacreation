import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Main.css'
import Aboutss from './Aboutss';
import Homess from './Homess';
import Services from './Services';
import Clients from './Clients';
import Contact from './Contact';
import { New } from './New';
import Careers from './Careers';





function Main() {
  return (
    <>

<div>
<Navbar>
    <nav className='cv'>
        <a href='#home'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrw53kSVAGxgcYHr0bXZRBEL64jDPtnpJk1ETS5ModXLWy1EVQf337JHzsCcTu5QxLl94&usqp=CAU'alt='logo' className='fg'/></a>
        <a href='#home' className='kp'>Home</a>
        <a href='#about' className='kp'>About</a>
        <a href='#service' className='kp'>Service</a>
        <a href='#client'className='kp' >Client</a>
        <a href='#careers'className='kp'>Careers</a>
        <a href='#contactus'className='kp'>Contact Us</a>
        <a href='https://www.instagram.com/accounts/login/?hl=en' target='_blank' className='social'><img src='https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147823814.jpg' alt='instagram' className='socia'></img></a>
        <a href='https://x.com/i/flow/login' target='_blank' className='social'><img src='https://image.shutterstock.com/image-photo/image-260nw-2359795883.jpg' alt='twitter' className='socia'></img></a>
        <a href='https://www.facebook.com/' target='_blank' className='social'><img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='facebook' className='socia'></img></a>
        <a href='https://www.linkedin.com/login/' target='_blank' className='social'><img src='https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg' alt='linkedin' className='socia'></img></a>
    </nav>
</Navbar>




<Homess/>
<Aboutss/>
<Services/>
<Clients/>
<Careers/>
<Contact/>
<New/>

</div>



 </>
    
  )
}

export default Main