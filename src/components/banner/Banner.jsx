"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  return (
    <div className="my-5 max-w-screen-xl mx-auto rounded-lg overflow-hidden ">
      <Slider {...settings} className="rounded-lg">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Slide 1"
            className="w-full h-[60vh] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1649770638727-6056d269d587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Slide 2"
            className="w-full h-[60vh] object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1696733585001-868eb49cbfa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Slide 3"
            className="w-full h-[60vh] object-cover rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
