import React from "react";
import '../Styles/footer.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer_container">
                <div className="sub"></div>



                <div className="footer">

                <div className="logo-section-footer">
          <div className="logo-footer">
            <img className="logo-icon-footer" src={logo}></img>
            <span className="logo-text-footer">Jur Ur</span>
          </div>
        </div>


        <div className='description'>
        <nav className="nav-links-footer">
          <Link to="/" className="nav-link-footer">Нүүр</Link>
          <Link to="/about" className="nav-link-footer">Бидний Тухай</Link>
          <Link to="/products" className="nav-link-footer">Бүтээгдэхүүн</Link>
          <Link to="/branches" className="nav-link-footer">Салбарууд</Link>
          <Link to="/contact" className="nav-link-footer">Холбогдох</Link>
        </nav>

        <div className="address">
            <div className>🏠 Монгол Улс, Улаанбаатар хот, Сүх баатар дүүрэг - 1р хороо,  11000</div>
            <div className>✉️ contact@jurur.mn</div>
            <div className>📞 (976) 7575-7510</div>
        </div>
    </div>

    <div className="social-section">
            <a href="#" className="icon">
              <Facebook size={30} />
            </a>
            <a href="#" className="icon">
              <Instagram size={30} />
            </a>
            <a href="#" className="icon">
              <Twitter size={30} />
            </a>
          </div>
          <div></div>
        </div>
        <div className="copyright">
          <p>© 2024 - ЖүрҮр ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН &nbsp;&nbsp;&nbsp; Вэб Сайтыг: 1р Баг ХХК</p>
        </div>
        </div>
        );
    }
}

export default Footer;