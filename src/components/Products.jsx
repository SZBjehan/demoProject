import React, { Component } from 'react'
import Pic from '../assets/wood.jpg';
import { Fade, Slide } from "react-reveal";

const Products = () => {
    return (
        <div class="product" id="Products">
            <Fade bottom duration="1500">
                <div>

                    <div class="pos">

                        <div class="product-card">
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Pic} alt="" />
                                <div class="box_des"> 725 UC  </div>
                                <div class="box_des"> 720.00  </div>
                            </div>
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Pic} alt="" />
                                <div class="box_des"> 725 UC  </div>
                                <div class="box_des"> 720.00  </div>
                            </div>
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Pic} alt="" />
                                <div class="box_des"> 725 UC  </div>
                                <div class="box_des"> 720.00  </div>
                            </div>
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Pic} alt="" />
                                <div class="box_des"> 725 UC  </div>
                                <div class="box_des"> 720.00  </div>
                            </div>
                            <div class="pro-box">
                                <img class="pro-box-pic" src={Pic} alt="" />
                                <div class="box_des"> 725 UC  </div>
                                <div class="box_des"> 720.00  </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
export default Products;