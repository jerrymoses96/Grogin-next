import Image from "next/image";
import ProductImage from "./ProductImage";
import ProductsText from "./ProductsText";
import ProductTab from "./ProductTab";

const ProductsDescription = ({ product }) => {
  return (
    <div>
      <div className="flex gap-16 items-center my-10 ">
        {/* image section  */}
        <ProductImage product={product} />
        {/* description section  */}
        <ProductsText product={product} />
      </div>
      <div>
        <ProductTab product={product} />
      </div>
    </div>
  );
};

export default ProductsDescription;
