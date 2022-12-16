import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper max-width">
      <div className="footer-product-and-logo flex">
        <div className="footer-first-chamber">
          <div className="footer-first-logo">
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png"
              alt=""
              className="footer-img-logo"
            />
            <div className="footer-banner">
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png"
                alt=""
                className="cred-footer-banner"
              />
              <h3 className="first-chamber-heading">
                complete security. no asterisks.
              </h3>
              <p className="footer-first-para">
                CRED encrypts all data and transactions to ensure a completely
                secure experience for our members.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-second-chamber">
        <div className="footer-product-area">
          <div className="footer-product">
            <h3>products</h3>
            <a href=".">CRED pay</a>
            <br />
            <a href=".">Credit Score</a>
            <br />
            <a href=".">Check</a>
          </div>
          <div className="footer-cred">
            <h3>resources</h3>
            <a href=".">Article</a>
            <br />
            <a href=".">Blog</a>
            <br />
            <a href=".">Calculators</a>
            <br />
            <a href=".">Credit card</a> <br />
            <a href=".">payment guide</a> <br />
            <a href=".">Credit score guide</a>
          </div>
        </div>
      </div>
      <div className="footer-third-chamber">
        <div className="footer-resources-area">
          <div className="footer-cred">
            <h3>CRED</h3>
            <a href=".">About</a>
            <br />
            <a href=".">Careers</a>
            <br />
            <a href=".">IPL</a>
            <br />
            <a href=".">Customer care</a>
          </div>
          <div className="footer-policy">
            <h3>policy</h3>
            <a href=".">security</a>
            <br />
            <a href=".">
              transaction & <br />
              user verifications
            </a>
            <br />
            <a href=".">Google API</a>
            <br />
            <a href=".">Disclosure</a>
            <br />
            <a href=".">
              UBI Faq & <br /> grievances
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
