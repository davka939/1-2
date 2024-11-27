import React from "react";
import '../Styles/Shop.css';
class Shop extends React.Component{
    render(){
        return( 
            <div className="shop">
                <div className="article-shop">
                <h5 className="pacifico-title">Бүтээгдэхүүн</h5>
                <h5 className="casual-title">Шилдэг борлуулалттай бүтээгдэхүүн</h5>
                </div>
                <div className="article2-shop">
                    <h5 className="casual-title">Онцлох бүтээгдэхүүн</h5>
                </div>
                <div className="category-container-shop">

  <div className="category-sidebar-shop">
    <div className="cat-title-shop">
        <div className="casual-title category-sidebar-title-shop">Категори</div>
        </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category1" />
      <label htmlFor="category1">Шинэ Бүтээгдэхүүн</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category2" />
      <label htmlFor="category2">Аз Жаргалын Бялуу</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category3" />
      <label htmlFor="category3">Брэнд Бялуу</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category4" />
      <label htmlFor="category4">Талх, Нарийн Боов</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category5" />
      <label htmlFor="category5">Слат, Сэндвич</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category6" />
      <label htmlFor="category6">Дессерт</label>
    </div>
    <div className="cat-sidebar-item-shop">
      <input type="checkbox" id="category7" />
      <label htmlFor="category7">Уух Зүйлс</label>
    </div>
  </div>

  <div className="category-shop">
    <div className="cat-item-container">
      <div className="category-item-shop">Шинэ Бүтээгдэхүүн</div>
      <div className="category-item-shop">Аз Жаргалын Бялуу</div>
      <div className="category-item-shop">Брэнд Бялуу</div>
      <div className="category-item-shop">Талх, Нарийн Боов</div>
      <div className="category-item-shop">Слат, Сэндвич</div>
      <div className="category-item-shop">Дессерт</div>
      <div className="category-item-shop">Уух Зүйлс</div>
    </div>
  </div>
</div>


            </div>
        );
    }
}
export default Shop;