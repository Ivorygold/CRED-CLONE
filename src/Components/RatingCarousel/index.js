import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { render } from "@testing-library/react";
import "./ratingCarousel.css";

class RatingCarousel extends Component {
  render() {
    return (
      <Carousel
        // showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
        className="carouselPara"
      >
        <div>
          <p>
            "i would say one of the best platforms to manage your credit card
            payments with lot of advantages and rewards. you can even pay rent
            to your owner using credit card. that's really cool. thanks for all
            the awesomeness. keep inventing !!" <br />
            <span className="carouselParaName">jagadeeswar reddy singam</span>
          </p>
        </div>
        <div>
          <p>
            "in love! such a seamless user experience, smooth as freshly waxed
            pair of legs! very intuitive and easy to use application. good job
            people, good job." <br />
            <span className="carouselParaName">parul mehra</span>
          </p>
        </div>
        <div>
          <p>
            "this is a great app loaded with functionality and simplicity yet
            elegant and intuitive. a must have for the plastic money users.
            keeps me in financial discipline and helps me take the billing and
            payment worries out of my mind" <br />
            <span className="carouselParaName">ranesh bhattacharya</span>
          </p>
        </div>
        <div>
          <p>
            "i would say one of the best platforms to manage your credit card
            payments with lot of advantages and rewards. you can even pay rent
            to your owner using credit card. that's really cool. thanks for all
            the awesomeness. keep inventing !!" <br />
            <span className="carouselParaName"> jagadeeswar reddy singam</span>
          </p>
        </div>
        <div>
          <p>
            "have been using the app for an year... very happy with this. it
            greatly avoids the need for searching for statements individually
            and logging in to pay them all. with cred i can happily pay all my
            cc bills with a single click. love the experience." <br />
            <span className="carouselParaName"> pushpalatha a</span>
          </p>
        </div>
      </Carousel>
    );
  }
}
export default RatingCarousel;
