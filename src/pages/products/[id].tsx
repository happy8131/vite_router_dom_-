import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product/detail";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../tyoes";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  const {
    category,
    title,
    description,
    image,
    price,
    rating: { rate },
  } = data;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};

export default ProductDetailPage;
