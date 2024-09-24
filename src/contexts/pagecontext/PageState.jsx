import { createContext, useState } from "react";

export const PageState = createContext()

const StateProvider = (props) => {
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

export default StateProvider;

