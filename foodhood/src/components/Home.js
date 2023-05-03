import React from 'react'
import "../css/Home.css"
import * as IoIcons5 from "react-icons/io5";

function Home() {
  return (
    <div className='home'>
      <div className='profilesection'>
        <div className='dp'></div>
        <div className='profiledetails'>
          Soyabean
        </div>
        <div className='profilesectionbuttons'>
          <button className='profilesettingsbutton'>Settings</button>
          <button className='profilesignoutbutton'>Sign Out</button>
          <button className='profilecreatepostbutton'>Create Post</button>
        </div>
      </div>
      <div className='feed'>
        <div className='search'>Search
        </div>
        <div className='feedpostcontainer'>
          If you can read this, you can read.
          <div className='postpicture'></div>
          <div className='postinteractions'>
            <button className='likebutton'><IoIcons5.IoFastFoodOutline /></button>
            <button className='commentbutton'><IoIcons5.IoChatbubblesOutline /></button>
          </div>
        </div>
      </div>
      <div className='notifications'>
      </div>
    </div>
    
  )
}

export default Home