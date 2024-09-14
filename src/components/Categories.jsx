import React from 'react';
import './Categories.css';

const Categories = ({ theme }) => {
  const Women = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_CO-ORD_SETS_pOSuA9R.jpg?format=webp&w=480&dpr=2.0"
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_SHIRTS_AJH6UJ5.jpg?format=webp&w=480&dpr=2.0"
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_SNEAKERS_O7KW5q1.jpg?format=webp&w=480&dpr=2.0"
    }
  ];

  const Men = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Oversized_Tshirtjpg_pRkx6L0.jpg?format=webp&w=480&dpr=2.0",
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Jeans_I5hwFAL.jpg?format=webp&w=480&dpr=2.0",
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shirts_1_RNthw3J.jpg?format=webp&w=480&dpr=2.0",
    }
  ];

  const Kid = [
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_2_yKcrEe2.jpg?format=webp&w=480&dpr=2.0",
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_SGcZo8l.jpg?format=webp&w=480&dpr=2.0",
    },
    {
      imgSrc: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_GW6k964.jpg?format=webp&w=480&dpr=2.0",
    }
  ];



  const Women2 = ["https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_TOPS_dN2Sa5v.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_OVERSIZED_T-SHIRTS_6DMThKF.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_JEANS_ZfkYz4r.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Cat_BIG_TILE_Women_DRESSES_qrNDkmz.jpg?format=webp&w=480&dpr=2.0"
  ]
  const Men2 = ["https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/4_23_VzCJxBJ.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Polos_1_YaR6jsm.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/T-Shirts_R0RJM2z.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Supima_XMLr0Ic.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Joggers_3_DZFfzIa.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shorts_3_XjJIcZv.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/9_13_PAcaDwW.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Hoodies_6F9Bbxm.jpg?format=webp&w=480&dpr=2.0"
  ]
  const Kid2 = ["https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/4_1_ZbXGHDz.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_TmmC5qV.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/6_zQxpz5u.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/11_a866YYK.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_Gp6AKio.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/9_1_ICJAMEr.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/12_8WGNYyE.jpg?format=webp&w=480&dpr=2.0",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/10_e16nPGp.jpg?format=webp&w=480&dpr=2.0"
  ]

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
  const getImagesByTheme2 = (theme) => {
    switch (theme) {
      case 'Women':
        return Women2;
      case 'Men':
        return Men2;
      case 'Kid':
        return Kid2
      default:
        return [];
    }
  };

  const images = getImagesByTheme(theme);
  const images2 = getImagesByTheme2(theme)

  return (
    <>
      <h1 className='subheadings'>Categories</h1>
      <div className="categories-grid">
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imgSrc} alt={item.title} />
          </div>
        ))}
      </div>
      <div className="categories-grid2">
        {images2.map((item, index) => (
          <div className="card" key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
