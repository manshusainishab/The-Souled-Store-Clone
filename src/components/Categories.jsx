import React from 'react';
import Slider from 'react-slick';
import styles from './Categories.module.css';

const Categories = ({ theme }) => {
  const Women = [
    {
      title: "Women's T-Shirt",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_page_erYYfPM.jpg?format=webp&w=1500&dpr=2.0",
      description: "Stylish Women's T-Shirt"
    },
    {
      title: "Women's Jacket",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_6M3fTdQ.jpg?format=webp&w=1500&dpr=2.0",
      description: "Comfortable and Trendy"
    },
    {
      title: "Women's Jeans",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_banner_copy_1_OsQCGcf.jpg?format=webp&w=1500&dpr=2.0",
      description: "Perfect fit for any occasion"
    }
  ];

  const Men = [
    {
      title: "Men's T-Shirt",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/OVERSIZED_TSHIRT-_HOMEPAGE.jpg?format=webp&w=1500&dpr=2.0",
      description: "Cool and Casual"
    },
    {
      title: "Men's Jacket",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Casual_Shirts_HOMEPAGEpsd.jpg?format=webp&w=1500&dpr=2.0",
      description: "Stylish and Warm"
    },
    {
      title: "Men's Jeans",
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_2_8crLICw.jpg?format=webp&w=1500&dpr=2.0",
      description: "Comfortable and Durable"
    }
  ];

  const getImagesByTheme = (theme) => {
    switch (theme) {
      case 'Women':
        return Women;
      case 'Men':
        return Men;
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 cards at a time
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024,  // Below 1024px show 2 cards
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,  // Below 768px show 1 card
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <h1 className='subheadings'>CATEGORIES</h1>
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Categories;
