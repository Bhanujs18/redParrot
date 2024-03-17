import React from 'react'

const Footer = () => {
  return (

    // <img className='logo shadowc' src='https://res.cloudinary.com/dyqynjew8/image/upload/v1705139976/h_tbgf1s.png' />

    <div className='footer'>
        <div  style={{textAlign:'center'}}><p style={{fontSize:'2rem' , fontWeight:800}}>red parrot</p></div>
       
        <div>
        <p>Online Shopping</p>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Trending</li>
          <li>New Arrivals</li>
          </ul>
       </div>

       <div>
        <p>Customer Policies</p>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Privacy Policy</li>
        </ul>
       </div>

       <div className='appDownload'>
        <div className='app'><img  src='https://download.cnet.com/a/img/resize/82d48eac87f67920e615f94668aac58831717a39/catalog/2019/02/28/796bc648-9a9e-48a8-a1d1-4eba9e4299cc/imgingest-1840916640336399187.png?auto=webp&fit=crop&width=64' />&nbsp;Google Play</div>
        <div className='app'><img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png' />&nbsp;Apple Store</div>

       </div>
       
       <div className='socialIcons'>
        <div><img  width="30" height="30" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/></div>
        <div><img width="30" height="30" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/></div>
        <div><img width="30" height="30" src="https://img.icons8.com/fluency/48/gmail-new.png" alt="gmail-new"/></div>
        <div><img width="30" height="30" src="https://img.icons8.com/color-glass/48/instagram-new--v1.png" alt="instagram-new--v1"/></div>
        </div>
    </div>
  )
}

export default Footer