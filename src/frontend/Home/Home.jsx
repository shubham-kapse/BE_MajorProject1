import React from 'react'
import './Home.css'
import homeimg1 from '../../images/homeimg1.png'

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
        </div>
    )
}

export default Home
