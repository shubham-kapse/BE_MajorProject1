import React from 'react'
import './Home.css'
import homeimg1 from '../../images/homeimg1.png'
import aboutimg from '../../images/image-about-us.png'
import CountUp from 'react-countup'

const Home = () => {
    return (
        <div className='homepage'>
            <div className='container'>
                <div className='left-container'>
                    <h2 className='t1'>Healthy Minds, Happy Lives Mental Health Consultancy</h2>
                    <br />
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio eos porro ad dolorum delectus, non culpa magnam excepturi optio cupiditate repellat, autem facilis enim aperiam nesciunt quam recusandae neque debitis iure quo veritatis.</span>

                    <br />

                    <button className='homebtn'>Let's get started</button>
                </div>

                <div className='right-container'>
                    <img src={homeimg1} alt="" className='homeimg1' />

                </div>
            </div>

            <div className='counter'>
                <h1>
                    Counter
                    {/* <CountUp start={0} end={6} duration={5} delay={0} /> */}
                </h1>

            </div>

            <div className='aboutus'>
                <div className='lc'>
                    <img src={aboutimg} alt="About us image" />
                </div>

                <div className='rc'>

                    <h1>About Us</h1>
                    <span>Welcome to Mental Health Tracker, where we believe that taking care of your mental well-being is a journey worth tracking. We understand that mental health is a vital component of overall wellness, and we're here to support you every step of the way. <br />

                        Our mission is to empower individuals to prioritize their mental health, reduce stigma, and promote self-awareness. We provide a safe and compassionate space for you to monitor and improve your mental health, because we believe that everyone deserves access to the resources and tools they need to thrive.
                    </span>
                    <br />
                    <span>
                        We invite you to explore our website, use our tracking tools, access valuable resources, and become a part of our supportive community. Together, we can break the silence surrounding mental health, foster self-care, and empower one another to lead happier, healthier lives.

                        Thank you for choosing Mental Health Tracker as your partner on this journey. Your well-being matters, and we're here to help you prioritize it.
                    </span>

                </div>
            </div>
        </div >
    )
}

export default Home
