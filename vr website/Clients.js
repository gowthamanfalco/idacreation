import React from 'react'
import './Clients.css'
import Carousel from 'react-bootstrap/Carousel';

function Clients() {
  return (
    <>
    <section id='client'>
   
   <div>
        <h1>Our Clients</h1>
       <center> <p>Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their</p></center>
      <center> <p> unique needs, tailoring solutions, and fostering long-term relationships.</p></center>


      <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://futurumgroup.com/wp-content/uploads/2023/05/Zoho-Unveils-Zoho-Apps-a-New-Suite-of-Offerings-Designed-to-Attract-and-Assist-Entrepreneurs-and-Solopreneurs.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://mexico-now.com/wp-content/uploads/2022/10/Home-facebook.png"
          alt="Second slide"
        /> 
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg"
          alt="Third slide"
        /> 
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://assets.upstox.com/content/assets/images/news/tata-consultancy-services-limited-tcs-logo-2_86727.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.wipro.com/content/dam/nexus/en/site/anz/wipro-logo-sustainability-1100x560.png"
          alt="Second slide"
        />   
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://asset.brandfetch.io/idMkJqDjRv/idfwskMFQL.jpeg"
          alt="Third slide"
        />   
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202308/shutterstock_1380605588-sixteen_nine.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/OracleLogo.png"
          alt="Second slide"
        /> 
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.businessinsider.in/photo/82700898/mphasis-aims-to-be-a-10-billion-company-in-the-next-3-5-years.jpg"
          alt="Third slide"
        />  
      </Carousel.Item>
    </Carousel>



   </div>
    </section>
    </>
  )
}

export default Clients