import Image from "next/image";
import ProductImage from "./ProductImage";
import ProductsText from "./ProductsText";
import ProductTab from "./ProductTab";
import ProductRelated from "./ProductRelated";

const ProductsDescription = ({ product }) => {
  return (
    <div>
      <div className="flex gap-16 md:flex-col items-center my-10 ">
        {/* image section  */}
        <ProductImage product={product} />
        {/* description section  */}
        <ProductsText product={product} />
      </div>
      <div>
        <ProductTab product={product} />
        <ProductRelated product={product} />
      </div>
    </div>
  );
};

export default ProductsDescription;
