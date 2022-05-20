import {Topbar} from './components/Topbar/Topbar'
import {Intro} from './components/Intro/Intro'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Works} from './components/Works/Works'

import {Contact} from './components/Contact/Contact'
import {Menu} from './components/Menu/Menu'
import './app.scss'
import { useState } from 'react'
import { Hobbies } from './components/Hobbies/Hobbies'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutMe, setAboutMe] = useState (false)
  const [dark, setDark] = useState(false)
  return (
    <div className={"app " + ( dark && 'dark')}>
    <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={dark} setDark={setDark}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}   dark={dark} setDark={setDark}/>
    <div className="sections">
      <Intro aboutMe={aboutMe} setAboutMe={setAboutMe}  dark={dark} setDark={setDark}/>
      <Portfolio dark={dark} setDark={setDark}/>
      {/* <Hobbies dark={dark} setDark={setDark} /> */}
      {/* <Works dark={dark} setDark={setDark}/> */}
      
      <Contact dark={dark} setDark={setDark} />
    </div>
    </div>
  );
}

export default App;
