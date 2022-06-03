import React from 'react'
import { Container } from 'react-bootstrap'
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTelephoneForwardFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Container>
      <div className='contactMap'>
        <h3>MAP</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.207153424612!2d135.49655531523223!3d34.699954680434615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6ed2241a467%3A0x588c4d8bc438e0dd!2z44Ku44Oj44Op44Oq44O844KJ44KA44O8!5e0!3m2!1sja!2sjp!4v1653821408529!5m2!1sja!2sjp" 
          width="100%" 
          height="450"
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div className='contactDetail'>
        〒530-0001 <br />
        大阪市北区梅田1-11-4&nbsp;大阪駅前第4ビル1階24 <br /><br />
        <div className='contactIcon'>
          <a href="tel:0663446766"> < BsTelephoneForwardFill size={50} color={'#31aedb'}/> <br />
            TEL : 06-6344-6766
            </a> <br />
            <a href="mailto:museslamu@miracle.ocn.ne.jp"> < BsEnvelopeFill size={50} color={'#31aedb'}/> <br />
            MAIL : museslamu@miracle.ocn.ne.jp
            </a> <br /><br />
        </div>
        営業時間 : 12:00 ~ 17:00 ＜土日、祝 休廊＞ <br />
        <small>展示会等により営業時間等変更する場合がございます</small>
      </div>
      
      
    </Container>
  )
}

export default Contact