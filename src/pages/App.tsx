import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { ProductType } from "@/lib/contract";
import { fetchAll } from "@/lib/fetch";

function App() {
  const [sneakers, setSneakers] = useState<ProductType[]>();
  
  useEffect(() => {
    async function fetch() {
      const elem = await fetchAll();
      setSneakers(elem);
    }
    fetch();
  }, []);
  return (
    <>
      <Header />

      <div className="w-full h-96 bg-zinc-100 flex justify-center items-center">
        {sneakers?.map((elem) => {
          return <span>{elem.title}</span>;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
