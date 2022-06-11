import React from 'react'

const About = () => {
  return (
    <div className='aboutPie'>
      <h1>About</h1>
      <div className='aboutFont'>
        <h3>展覧会</h3>
        <h5>
        &nbsp;&nbsp;&nbsp;2022年6月6日〜6月27日<br />
        &nbsp;&nbsp;&nbsp;うさ個展『いつか逢えるとき』
        </h5>
      </div>
        
      <div className='aboutImg'>
        <div>
          <img src="about_6.jpeg" alt="" />
        </div>
        <div>
          <img src="about_2.jpeg" alt="" />
        </div>
        <div>
          <img src="about_3.jpeg" alt="" />
        </div>
        <div>
          <img src="about_1.jpeg" alt="" />
        </div>
       <div>
        <img src="about_4.jpeg" alt="" />
       </div>
        <div>
          <img src="about_5.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About