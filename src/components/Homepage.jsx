import React,{useState} from 'react'
import NavbarWhite from './NavbarWhite'
import SliderComponent from './SliderComponent';
import './Homepage.css';
import BestSeller from './BestSeller';
import Categories from './Categories';
import Footer from './Footer';

function Homepage() {
  const [curclick,setClick] = useState("Women")
  const [women,setWomen] = useState('clicked');
  const [men,setMen] = useState('notclicked');
  const [kid,setKid] = useState('notclicked');

  const handelwomen = ()=> {
    setWomen('clicked')
    setMen('notclicked')
    setKid('notclicked')
    setClick("Women")
  }
  const handelmen = ()=> {
    setMen('clicked')
    setWomen('notclicked')
    setKid('notclicked')
    setClick("Men")
  }
  const handelkid = ()=> {
    setKid('clicked')
    setMen('notclicked')
    setWomen('notclicked')
    setClick("Kid")
  }
  return (
    <>
      <div className='topbar'>
        <div className='inner-topbar'>
            <ul className='topbar-list'>
                <li className={women} onClick={handelwomen} id='topbar-category-list'>WOMEN</li>
                <li className={men} onClick={handelmen} id='topbar-category-list'>MEN</li>
                <li className={kid} onClick={handelkid} id='topbar-category-list'>KIDS</li>
            </ul>
            <ul className='topbar-list'>
                <li id='topbar-option-list'><a href='/'>TRACK ORDER</a></li>
                <li id='topbar-option-list'><a href='/'>CONTACT US</a></li>
                <li id='topbar-option-list'><i class="fa fa-mobile-phone"></i>  <a href='https://play.google.com/store/apps/details?id=com.thesouledstore'>DOWNLOAD APP</a></li>
            </ul>
        </div>
      </div>
    <NavbarWhite></NavbarWhite>
    <SliderComponent theme = {curclick}></SliderComponent>
    <BestSeller theme = {curclick} ></BestSeller>
    <Categories theme={curclick}></Categories>
    <Footer></Footer>
    </>
  )
}

export default Homepage;