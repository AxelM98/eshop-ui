import React from 'react'
import "./contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='enter your email' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact