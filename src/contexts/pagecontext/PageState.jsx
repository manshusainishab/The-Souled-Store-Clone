//sneakers
import Deadpool from '../../images/Deadpool.webp';
import Spiderman from '../../images/Spiderman.webp';
import BatMan from '../../images/Bat-Man.webp';
//sneakers

//perfumes
import perfume1 from '../../images/perfume1.webp';
import perfume2 from '../../images/perfume2.webp';
import perfume3 from '../../images/perfume3.webp';
import perfume4 from '../../images/perfume4.webp';
import perfume5 from '../../images/perfume5.webp';
import perfume6 from '../../images/perfume6.webp';



















import { useState , createContext} from 'react';

export const PageState = createContext()
export const ProductState = createContext()

const StateProvider = (props) => {
  const [curclick, setClick] = useState("Women")
  const [women, setWomen] = useState('clicked');
  const [men, setMen] = useState('notclicked');
  const [kid, setKid] = useState('notclicked');

  const handelwomen = () => {
    setWomen('clicked')
    setMen('notclicked')
    setKid('notclicked')
    setClick("Women")
  }
  const handelmen = () => {
    setMen('clicked')
    setWomen('notclicked')
    setKid('notclicked')
    setClick("Men")
  }
  const handelkid = () => {
    setKid('clicked')
    setMen('notclicked')
    setWomen('notclicked')
    setClick("Kid")
  }

  const stateValue = {
    handelkid,
    handelmen,
    handelwomen,
    setClick,
    setKid,
    setMen,
    setWomen,
    women,
    men,
    kid,
    curclick
  }

  return (
    <PageState.Provider value={stateValue}>
      {props.children}
    </PageState.Provider>
  )
}

const ProductData = (props) => {
  const [whichData,setData] = useState("MarvelEdition");

  const changeData = (newData)=>{
    setData(newData);
  }

  const data = {


    MarvelEdition: [{
      id: 1,
      name: 'Deadpool: Utility Suit',
      price: 2599,
      imageUrl: Deadpool, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }, {
      id: 2,
      name: 'Spider-Man: Spidey Sigil',
      price: 2999,
      imageUrl: Spiderman, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }, {
      id: 3,
      name: 'Batman: The Dark Knight 2.0',
      price: 2399,
      imageUrl: BatMan, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }],



    Perfumes: [
      {
        id: 4,
        name: 'Batman: Rebirth',
        price: 1299, // Hardcoded price
        imageUrl: perfume1,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 5,
        name: 'Naruto: Akatsuki',
        price: 1599, // Hardcoded price
        imageUrl: perfume2,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 6,
        name: 'Naruto: Hokage',
        price: 1199, // Hardcoded price
        imageUrl: perfume3,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 7,
        name: 'Iron Man: Billionaire',
        price: 1999, // Hardcoded price
        imageUrl: perfume4,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 8,
        name: 'Black Panther: The King',
        price: 1399, // Hardcoded price
        imageUrl: perfume5,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 9,
        name: 'TSS Originals: Lunaris',
        price: 1699, // Hardcoded price
        imageUrl: perfume6,
        sizes: ['50ML', '100ML', '200ML']
      }
    ],








  }
  const allFunction = {
    whichData,data,changeData
  }



  return (
    <ProductState.Provider value={allFunction}>
      {props.children}
    </ProductState.Provider>
  )
}

export { StateProvider, ProductData };
