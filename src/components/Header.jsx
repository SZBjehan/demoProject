import React, { Component } from 'react'

const Header = () => {
    return (
        <div class="header" id="Header">
            <div class="head-title">
                <div><img src="" alt="" /></div>
                <h2> Gamers Vault</h2>
                <p> Fast & Easy  </p>
                <div class="head-nav">
                    <ul class="ul-nav">
                        <li class="li-nav"><a href="#"> Home </a></li>
                        <li class="li-nav"><a href="#"> Shop </a></li>
                        <li class="li-nav"><a href="#"> Book Online </a></li>
                        <li class="li-nav"><a href="#"> Plans & Pricing </a></li>

                    </ul>

                </div>
            </div>
            <div class="head-social">
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-instagram"></a>
            </div>
        </div>
    );
}
export default Header;