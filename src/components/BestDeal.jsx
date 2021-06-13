import React, { Component } from 'react'
import Pic from '../assets/wood.jpg';

import { Fade, Slide } from "react-reveal";

const BestDeal = () => {
    return (
        <div class="best-deal" id="BestDeal">
            <div>
                <Fade bottom duration="1500">
                    <div>
                        <div class="b-deal">
                            <div class="bd-info">
                                <div class="bd-pic">
                                    <img src={Pic} alt="" class="bd-c" />
                                </div>
                                <div class="bd-text">
                                    <h2>Best Deals</h2>
                                    <p>Click below to see more</p>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
export default BestDeal;