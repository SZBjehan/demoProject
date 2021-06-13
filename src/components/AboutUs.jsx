import React, { Component } from 'react'
import Pic from '../assets/wood.jpg';
import { Fade, Slide } from "react-reveal";


const AboutUs = () => {
    return (
        <div class="about-us" id="AboutUs">
            <Fade right duration="1500">
                <div>
                    <div class="about-deal">
                        <div class="about-info">

                            <div class="about-text">
                                <h2>About us</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt saepe tenetur dolore perspiciatis consequuntur rem officia vel atque unde? Alias voluptate ipsa cumque incidunt. Sint minima beatae quidem quam.</p>
                                <button>Get in Touch</button>
                            </div>
                            <div class="about-pic">
                                <img src={Pic} alt="" class="about-c" />
                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default AboutUs;