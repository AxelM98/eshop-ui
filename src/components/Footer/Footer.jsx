import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea accusamus aliquid modi error repudiandae delectus asperiores odit
            iste ipsam, velit saepe numquam reprehenderit molestias tempora aut
            hic! Quisquam nemo alias debitis voluptatem iure et suscipit, quos
            quo amet illo.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ea accusamus aliquid modi error repudiandae delectus asperiores odit
            iste ipsam, velit saepe numquam reprehenderit molestias tempora aut
            hic! Quisquam nemo alias debitis voluptatem iure et suscipit, quos
            quo amet illo.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AUGUSTISTORE</span>
          <span className="copyright">© Copyright 2023. All rights reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
