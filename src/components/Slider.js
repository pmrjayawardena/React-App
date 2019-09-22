import React from 'react';
import Slider from "react-slick";


class SliderComponent extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>{this.props.profile.name}</h3>
          </div>
          <div>
            <img src={this.props.profile.avatar_url}></img>
          </div>
        </Slider>
      );
    }
  }

export default SliderComponent;
