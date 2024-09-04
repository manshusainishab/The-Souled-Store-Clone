import React,{useState} from 'react'
import './navbarRed.css';

function NavbarRed() {
  const [women,setWomen] = useState('clicked');
  const [men,setMen] = useState('notclicked');
  const [kid,setKid] = useState('notclicked');

  const handelwomen = ()=> {
    setWomen('clicked')
    setMen('notclicked')
    setKid('notclicked')
  }
  const handelmen = ()=> {
    setMen('clicked')
    setWomen('notclicked')
    setKid('notclicked')
  }
  const handelkid = ()=> {
    setKid('clicked')
    setMen('notclicked')
    setWomen('notclicked')
  }
  return (
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
  )
}

export default NavbarRed
