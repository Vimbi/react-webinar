import React from "react";
import './style.css';

const ProductDetails = ({ product, onAdd }) => {
  return (
    <div className="Product">
      <p className="Product__description">{product.description}</p>
      {product.maidIn &&
        <div className="Product__country">
          Страна производитель: <span>{`${product.maidIn.title} (${product.maidIn.code})`}</span>
        </div>
      }
      {product.category &&
        <div className="Product__category">
          Категория: <span>{product.category.title}</span>
        </div>
      }
      <div className="Product__edition">
        Год выпуска: <span>{product.edition}</span>
      </div>
      <div className="Product__price">
        Цена: <span>{product.price} ₽</span>
      </div>
      <button onClick={() => onAdd(product._id)}>Добавить</button>
    </div>
  );
}

export default React.memo(ProductDetails);
