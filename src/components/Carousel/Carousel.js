import React from 'react';
import { Carousel } from 'antd';
import banner1 from '..//../assets/banner/banner.jpg'
import banner2 from '..//../assets/banner/kids_banner.jpg'



const contentStyle = {
  height: '400px',
  width:'100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel autoplay style={{marginBottom:"100px"}}>
    <div>
      <img style={contentStyle} src={banner1} />
    </div>
    <div>
      <img style={contentStyle} src={banner2} />
    </div>
  </Carousel>
);
export default App;