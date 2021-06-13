import React, { Component } from 'react'

const Footer = () => {
    return (
        <div class="footer" id="Footer">
            <div>
                <div>
                    <h2 class="sub-text">Subscribe Form</h2>
                    <div class="sub-box">
                        <input type="text" placeholder="Email Address" name="email" class="sub-boxin" required />
                    </div>
                    <div class="sub-box">
                        <input type="submit" value="Submit" class="sub-boxsub" ></input>
                    </div>
                    <p> 01763134601 </p>
                    <div class="">
                        <a href="#" class="fa fa-linkedin shout-social"></a>
                        <a href="#" class="fa fa-github shout-social"></a>
                        <a href="#" class="fa fa-facebook shout-social"></a>
                        <a href="#" class="fa fa-instagram shout-social"></a>
                    </div>

                    <div class="foot-credit">
                        <p> ©2019 by Gamers Wallet. Proudly created without Wix.com </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;