import React from 'react';
import Slider from 'react-slick';
import './BestSeller.css';

const BestSeller = ({ theme }) => {
  const Women = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Most-Loved-Tile_01_1_IrtLjoF.jpg?format=webp&w=480&dpr=2.0"
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Most-Loved-Tile_02_1_UP9J7Hm.jpg?format=webp&w=480&dpr=2.0"
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Most-Loved-Tile_03_1_TQSd9fl.jpg?format=webp&w=480&dpr=2.0"
    }
  ];

  const Men = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Best_Sellers_Tiles_Template_copy.3.jpg?format=webp&w=480&dpr=2.0"
    },
    { 
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Best_Sellers_Tiles_Template_copy.5.jpg?format=webp&w=480&dpr=2.0" 
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Best_Sellers_Tiles_Template_copy.jpg?format=webp&w=480&dpr=2.0"
    }
  ];
  const Kid = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Collection-tile_DVVrhic.jpg?format=webp&w=480&dpr=2.0"
    },
    { 
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/HELLO_KITTY_KIDS_Collection_tile_7lFFdox.jpg?format=webp&w=480&dpr=2.0"
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/collection_tile_copy_VNyoOPk.jpg?format=webp&w=480&dpr=2.0"
    }
  ];

  const getImagesByTheme = (theme) => {
    switch (theme) {
      case 'Women':
        return Women;
      case 'Men':
        return Men;
      case 'Kid':
        return Kid
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);

  const settings = {
    arrow: true,
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
    <h1 className='subheadings' >Best Sellers</h1>
    <div className="Categories-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default BestSeller;
