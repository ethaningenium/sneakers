import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Item from "@/components/Item";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/lib/fetch";

function App() {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });
  return (
    <>
      <Header />
      <div className="w-full bg-zinc-100 flex flex-wrap justify-center items-center p-12 gap-8">
        {data?.map((elem) => {
          return <Item key={elem.id} {...elem} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
