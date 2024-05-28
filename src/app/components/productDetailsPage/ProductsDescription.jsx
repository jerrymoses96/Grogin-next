import Image from "next/image";
import ProductImage from "./ProductImage";
import ProductsText from "./ProductsText";

const ProductsDescription = ({ product }) => {
  return (
    <div className="flex ">
      {/* image section  */}
      <ProductImage product={product} />
      {/* description section  */}
      <ProductsText product={product}/>
    </div>
  );
};

export default ProductsDescription;
