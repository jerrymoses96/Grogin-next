import ProductDetails from "@/app/components/productDetailsPage/ProductDetails";

const Page = ({ params }) => {
  return (
    <div>
      <ProductDetails id={params.id} />
    </div>
  );
};

export default Page;
