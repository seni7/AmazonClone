import React from 'react';
import './Home.css';
import Product from './Product';
import HomeBackground from './HomeBackground'
const Home = () => {
    const slides = [
      { url: "https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"},
      { url: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" },
      { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"},
    //   { url: "http://localhost:3000/image-4.jpg", title: "city" },
    //   { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    ];
    const containerStyles = {
        //flex: 1,
        //  width: '100%',
         height: '750px',
        // top: "50%",
        // resizeMode: 'contain',
        // backgroundSize: "cover",
        // backgroundPosition: "center",
    };

    return (
    
    <div className='home'>
     <div className='Home__images' style={containerStyles}>
        <HomeBackground slides={slides} />
      </div>

           {/*  products */}
           <div className="home__row">
              <Product 
                  id="1"
                  title="Ethiopian Christian art  Ethiopian Cross T-Shirt"
                  price={15.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91Etdp5vzbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
              />
              
              <Product 
                  id="1"
                  title="MEROKEETY Women's Short Sleeve Lace Floral Cocktail Dress,  "
                  price={399.95}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61Q1UPgsDNL._AC_UY445_.jpg"
              />
              <Product
                  id="2"
                  title="OmniPoint adjustable switches: Allow for  of actuation."
                  price={1110.25}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/811-0kItnvL._AC_SX450_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="CAs an alternative,the Kindle eBook is available now "
                  price={11.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41x7bwd0kDS._AC_SY780_.jpg"
              />
              <Product
                  id="4"
                  title="iPhone Charger, YUNSONG Nylon Braided Lightning Cable ."
                  price={16.99}
                  rating={5}
                  
                  image="https://m.media-amazon.com/images/I/51lTry8CSZL._AC_SY1000_.jpg"
              />
              <   Product
                   id="5"
                   title="Ethiopian Christian art Christ in Glory Ethiopian Cross T-Shirt"
                   price={15.99}
                   rating={4}
                   image="https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SL1500_.jpg"
             />   
          </div>
          <div className="home__row">
              <Product
                  id="3"
                  title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Dark Blue"
                  price={169.99}
                  rating={5}
                  
                  image="https://images-na.ssl-images-amazon.com/images/I/61KSB0XUzjL._AC_SX342_.jpg"
              />
              <Product
                  id="6"
                  title="Fitbit Charge 5 Advanced Fitness, Health Tracker with Built-in GPS,"
                  price={179.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41iag5vRGVL._AC_UL480_QL65_.jpg"
              /> 
          </div>  
    </div>
    

  );
}

export default Home