
import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";



const products = [
  {
    id: 1,
    name: "The Candy Chair",
    price: "£250",
    image: "/1.svg",
  },
  {
    id: 2,
    name: "Pluto Vase Set",
    price: "£125",
    image: "/2.svg",
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: "£95",
    image: "/3.svg",
  },
  {
    id: 4,
    name: "The Lucky Lamp",
    price: "£304",
    image: "/8.svg",
  },
  {
    id: 5,
    name: "The Candy Chandelier",
    price: "£750",
    image: "/4.svg",
  },
  {
    id: 6,
    name: "Studio Vase Set",
    price: "£85",
    image: "/5.svg",
  },
  {
    id: 7,
    name: "The Silky Vase",
    price: "£95",
    image: "/6.svg",
  },
  {
    id: 8,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/7.svg",
  },
  {
    id: 9,
    name: "Studio Vase Set",
    price: "£85",
    image: "/1.svg",
  },
  {
    id: 10,
    name: "The Silky Vase",
    price: "£95",
    image: "/2.svg",
  },
  {
    id: 11,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/3.svg",
  },
  {
    id: 12,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/8.svg",
  },
];

const Products = () => {
  return (
    <main>
      <Header />
<FilterBar/>

    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
        <Card key={product.id} product={product} />
        ))}
      </div>
      <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] my-8">
        View collection
      </button>
    </div>
    <Footer />
    </main>
  );
};

export default Products;
