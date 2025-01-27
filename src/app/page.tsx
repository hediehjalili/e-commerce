import Header from "./componenets/Header/page";
import Banner from "./componenets/Banner/page";
import CategoryGrid from "./componenets/CategoryGrid/page";
import Footer from "./componenets/Footer/page"; 
const categories = [
  { name: "لپ تاپ", image: "/images/laptop.png" },
  { name: "موبایل", image: "/images/mobile.png" },
  { name: "تبلت", image: "/images/tablet.png" },
  { name: "هدفون", image: "/images/10.png" },
];

export default function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryGrid categories={categories} />
      <Footer />
    </div>
  );
}