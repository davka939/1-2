import React from 'react';
import '../Styles/home.css';
import banner from '../images/banner.png'
import hero from '../images/hero.jpg'
import item1 from '../images/item1.jpg'
import item2 from '../images/item2.png'
import item3 from '../images/item3.png'
import item4 from '../images/item4.png'
import item5 from '../images/item5.jpg'
import item6 from '../images/item6.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className="home">

        <div className='banner-home'>
        <img className="banner" src={banner}></img>
            <div className='heroshop-home'>
              <img className="heroshop" src={hero}></img>
              <h2>Шоколадтай жигнэмэг</h2>
              <p>Шоколад, Алмонд самартай жигнэмэг</p>
              <button>Цааш үзэх</button>
            </div>
        </div>
        
        <div className='head-home'>
          <h1>Амтлаг , Чанартай, Үргэлж шинэ</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

    <div class="category-home">
    <div class="_001A"></div>
    <div class="_002A"></div>
    <div class="_003A"></div>
    <div class="_004A"></div>
    <div class="_005A"></div>
</div>


        <div className='heads-home'>
        <h1>Бест селлер</h1>
        <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div class="bestseller-home">
    <div class="item">
      <img className="bestshop" src={item1}></img>
      <h2>Аяган бялуу</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item2}></img>
      <h2>Тахианы чиабатта</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item3}></img>
      <h2>Артизан талх</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item4}></img>
      <h2>Жимстэй талх</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item5}></img>
      <h2>Аз жаргалын бялуу</h2>
    </div>
    <div class="item">
      <img className="bestshop" src={item6}></img>
      <h2>Шоколадтай бялуу </h2>
    </div>
  </div>

  <div className='head1-home'>
  <h1>Бест селлер</h1>
  <h2>Шилдэг борлуулалттай бүтээгдэхүүн</h2>
  </div>


  <div className='banner2-home'>
  <div class="zurag1-home">zurag1</div>
  <div class="zurag2-home">zurag2</div>
  </div>


  <div className='banner2-home'>
  <div class="zurag3-home">zurag3</div>
  <div class="zurag4-home">zurag4</div>
  </div>

  <div className='heads-home'>haed4</div>

  <div className='banner2-home'>
  <div class="zurag5-home">zurag5</div>
  <div class="zurag6-home">zurag6</div>
  </div>
        </div>
     

    );
  }
}


export default Home;
