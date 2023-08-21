import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*Ad*/}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "178px" : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition }}
                    >
                    </motion.div>
                    <span>The best fitness club in town!</span>
                </div>
                {/*Hero Heading*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            Get your ideal body shape and live your life to the fullest
                        </span>
                    </div>
                </div>

                {/*Fig*/}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={120} start={100} delay='4' preFix="+" />
                        </span>
                        <span>Expert Trainers</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={500} start={420} delay='4' preFix="+" />
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={70} start={20} delay='1' preFix="+" />
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/*Btns*/}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span> 120 BPM</span>
                </motion.div>

                {/*Hero Images*/}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}

                    src={hero_image_back} alt="" className="hero-image-back" />

                {/*Calories*/}
                <motion.div className="calories"

                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}>
                    <img src={Calories} alt="" />
                    <div >
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero