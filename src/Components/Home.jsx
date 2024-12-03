import React from 'react';
import '../Styles/home.css';
import banner from '../images/banner.png';
import hero from '../images/hero.jpg';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
import alag from '../images/alag.png';
import Luuvan from '../images/luuvan.png';
import byluu from '../images/byluu.png';
import keks from '../images/Keks.png';
import cup from '../images/cup.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        {/* Banner Section */}
        <div className="banner-home">
          <img className="banner" src={banner} alt="Banner" />
          <div className="heroshop-home">
            <img className="heroshop" src={hero} alt="Hero" />
            <h2>Шоколадтай жигнэмэг</h2>
            <p>Шоколад, Алмонд самартай жигнэмэг</p>
            <button>Цааш үзэх</button>
          </div>
        </div>

        {/* Headline Section */}
        <div className="head-home">
          <h1>Амтлаг , Чанартай, Үргэлж шинэ</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        {/* Category Section */}
        <div className="category-home">
          <div className="_001A">
            <img src={alag} alt="Alag" />
            <div className="info">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
            </div>
            <button>Цааш үзэх</button>
          </div>
          <div className="_002A">
            <img src={Luuvan} alt="Luuvan" />
            <div className="info">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
            </div>
          </div>
          <div className="_003A">
            <img src={byluu} alt="Byluu" />
            <div className="info2">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
            </div>
          </div>
          <div className="_004A">
            <img src={keks} alt="Keks" />
          </div>
          <div className="_005A">
            <img src={cup} alt="Cup" />
            <div className="info1">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
              <button>Цааш үзэх</button>
            </div>
          </div>
        </div>

        {/* Best Seller Section */}
        <div className="heads-home">
          <h1>Бест селлер</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div className="bestseller-home">
          <div className="item">
            <img className="bestshop" src={item1} alt="Item 1" />
            <h2>Аяган бялуу</h2>
          </div>
          <div className="item">
            <img className="bestshop" src={item2} alt="Item 2" />
            <h2>Тахианы чиабатта</h2>
          </div>
          <div className="item">
            <img className="bestshop" src={item3} alt="Item 3" />
            <h2>Артизан талх</h2>
          </div>
          <div className="item">
            <img className="bestshop" src={item4} alt="Item 4" />
            <h2>Жимстэй талх</h2>
          </div>
          <div className="item">
            <img className="bestshop" src={item5} alt="Item 5" />
            <h2>Аз жаргалын бялуу</h2>
          </div>
          <div className="item">
            <img className="bestshop" src={item6} alt="Item 6" />
            <h2>Шоколадтай бялуу</h2>
          </div>
        </div>

        {/* shildeg borluulalt */}
        <div className="head1-home">
          <h1>Бест селлер</h1>
          <h2>Шилдэг борлуулалттай бүтээгдэхүүн</h2>
        </div>

        {/* Additional Banner Sections */}
        <div className="banner2-home">
          <div className="zurag1-home">zurag1</div>
          <div className="zurag2-home">zurag2</div>
        </div>

        <div className="banner2-home">
          <div className="zurag3-home">zurag3</div>
          <div className="zurag4-home">zurag4</div>
        </div>

        <div className="heads-home">head4</div>

        <div className="banner2-home">
          <div className="zurag5-home">zurag5</div>
          <div className="zurag6-home">zurag6</div>
        </div>
      </div>
    );
  }
}

export default Home;
