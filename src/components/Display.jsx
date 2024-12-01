import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation(); //used to get the current location

  console.log(location);

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : " ";
  const bgcolor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;
    }
    else {
      displayRef.current.style.background = `#121212`;
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<Displayhome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
        </Routes>
    </div>
  )
}

export default Display