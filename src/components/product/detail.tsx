import { Product } from "../../tyoes";

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail__category">{category}</p>
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={image} />
    <span className="product-detail__description">{description}</span>
    <span className="product-detail__price">${price}</span>
    <span className="product-detail__rating">{rate}</span>
  </div>
);

export default ProductDetail;
