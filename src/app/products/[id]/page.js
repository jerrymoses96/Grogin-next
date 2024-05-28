import ProductDetails from "@/app/components/productDetailsPage/ProductDetails";

const page = ({ params }) => {
  return (
    <div>
      <ProductDetails id={params.id} />
    </div>
  );
};

export default page;
