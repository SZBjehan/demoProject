import React, { Component } from 'react'
import Pic from '../assets/wood.jpg';

const ShoutOut = () => {
    return (
        <div class="best-deal" id="ShoutOut">
            <div class="b-deal">
                <div class="bd-info">
                    <div class="bd-pic">
                        <img src={Pic} alt="" class="bd-c" />
                    </div>
                    <div class="bd-text">
                        <h2>Give us a Shout</h2>
                        <p>Dhaka, Bangladesh</p>
                        <p>hasnain.uchchal@gmail.com</p>
                        <div class="">
                            <a href="#" class="fa fa-linkedin shout-social"></a>
                            <a href="#" class="fa fa-github shout-social"></a>
                            <a href="#" class="fa fa-facebook shout-social"></a>
                            <a href="#" class="fa fa-instagram shout-social"></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
export default ShoutOut;