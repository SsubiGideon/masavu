 import Header from '../components/header'
import React from 'react'
import AboutUs from '../components/about'
import Member from '../components/member'
import Register from './register'
import Wwd from '../components/wwd'
import whatwedo from '../components/whatwedo'



function Homepage() {
    const whatWeWo = whatwedo.map(item => { return (
        <Wwd img = {item.image}  cont={item.content} title={item.title} />
      ) }) 
  return (
    <div className='homepage'>
      <Header />
        <AboutUs /> 
        <Member />
        <section className='whatwedo'>
        <div id='whatwedo'>
        <h2>What We Do</h2></div>
        <div className='wwdo'>{whatWeWo}</div>
        </section>
    </div>
  )
}

export default Homepage
