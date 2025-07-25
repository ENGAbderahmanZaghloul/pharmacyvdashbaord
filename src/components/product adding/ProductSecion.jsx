import Topbar from "./Topbar";
import ProductInfoCard from "./ProductInfoCard";
import ProductTable from "./ProductTable";

const ProductInfoCardArr = [
  {
    img: "/public/images/Frame.png",
    title: "total products",
    proNum: "11,789",
  },
  {
    img: "/public/images/Frame (1).png",
    title: "Low Stock Items",
    proNum: "11,789",
  },
  {
    img: "/public/images/Frame (2).png",
    title: "Out Of Stock Items",
    proNum: "11,789",
  },
];
const ProductSecion = () => {
  return (
    <section className="bg-slate-100 h-lvh pt-10">
      <Topbar />
      <div className="ml-56 mr-5 py-10 flex gap-8 justify-center ">
        {ProductInfoCardArr.map((item) => {
          return (
            <ProductInfoCard
              logoImg={item.img}
              title={item.title}
              proNum={item.proNum}
            />
          );
        })}
      </div>
      <div>
        <ProductTable />
      </div>
      <div className="ml-56">
        <h1>تنبيلتمنبيتلمنبيتلمن</h1>
      </div>
    </section>
  );
};

export default ProductSecion;
