import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';  // Import the custom CSS for styling

const SliderComponent = ({ theme }) => {
  const Women = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_page_erYYfPM.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_6M3fTdQ.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_1_OsQCGcf.jpg?format=webp&w=1500&dpr=2.0"
  ];
  
  const Men = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/OVERSIZED_TSHIRT-_HOMEPAGE.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Casual_Shirts_HOMEPAGEpsd.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_2_8crLICw.jpg?format=webp&w=1500&dpr=2.0"
  ];
  
  const Kid = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/home_page_1.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Kids_Girls_Co-ord_SETS_HOMEPAGE.jpg?format=webp&w=1500&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_Banner_jghWCBh.jpg?format=webp&w=1500&dpr=2.0"
  ];

  // Select images based on the theme prop
  const getImagesByTheme = (theme) => {
    switch (theme) {
      case 'Women':
        return Women;
      case 'Men':
        return Men;
      case 'Kid':
        return Kid;
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);

  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Loop slides
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,     // Enable auto-play
    autoplaySpeed: 3000,  // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 768, // Tablet & mobile
        settings: {
          dots: false,    // Hide dots on small screens
          arrows: true   // Show arrows on small screens
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div className="slide" key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
