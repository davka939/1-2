import React from "react";
import '../Styles/Shop.css';
class Shop extends React.Component{
    render(){
        return( 
            <div className="shop">
                <div className="article-shop"></div>
                <div className="article2-shop"></div>
                <div className="category-container-shop">

                    <div className="category-sidebar-shop">
                    <div className="cat-title-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    <div className="cat-sidebar-item-shop"></div>
                    </div>

                    <div className="category-shop">
                      <div class="cat-item-container">
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                        <div className="category-item-shop"></div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Shop;