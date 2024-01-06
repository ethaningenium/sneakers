import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { ProductType } from "@/lib/contract";
import { fetchAll } from "@/lib/fetch";

function App() {
  const [items, setItems] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchAll().then((res) => setItems(res));
  }, []);
  return (
    <>
      <Header />
      <div className="w-full bg-zinc-100 flex flex-wrap justify-center items-center p-12 gap-8">
        {items.map((elem) => {
          return <Card key={elem.id} {...elem} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
