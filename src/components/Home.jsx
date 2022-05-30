import React from 'react'
import profileImage from "../images/profImage.jpeg";

const Home = () => {
  return (
    <div className='homePie'>
        <div className='homeTop'>
            <div className='topFont'>
                <h3>うさ個展</h3>
                <h1>いつか逢えるとき</h1>
                <h6>2022年 6月6日（月）〜 6月27日（月）</h6>
            </div>
        </div>
        <div className='homeProf'>
            <div className='profTitle'>
                <h5>Artist</h5>
                <h3>作家紹介</h3>
            </div>
            <div className='profContainer'>
                <img src={profileImage} className="profileImage" />
                <div className='profFont'>
                    <h4>うさ&nbsp;usa</h4>
                    <p>
                        絵本作家、劇団Sol.星の花主宰、動物レスキューチームうーにゃん代表としても活躍している創作家。自然が好きで、世界各地を旅する中、人間の都合により過酷な環境で生きることになった動物たちや、傷ついた地球の姿を知る。優しい世界につながっていくことを願い、創作活動を続けている。
                    </p>
                </div>
            </div>   
                
        </div>
        
    </div>
  )
}

export default Home