import React from 'react'
import Box from './Box'
import Header from './Header'
import PostContent from './PostContent'
import PostImage from './PostImage'
import './praktika2.css';

const Praktika2 = () => {
  return (
    <div>
        <Header/>
        <div className='images'>
        <PostImage/>
        <PostImage/>
        </div>
        <div className='content'>
        <PostContent/>
        <PostContent/>
        </div>
        <div className='boxes'>
        <Box/>
        <Box/>
        <Box/>
        </div>
    </div>
  )
}

export default Praktika2