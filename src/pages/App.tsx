import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Item from "@/components/Common/Item";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/lib/fetching/fetch";
import ItemLoading from "@/components/Common/ItemLoading";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: fetchAll,
  });

  return (
    <>
      <Header />
      <div className="w-full bg-zinc-100 flex flex-wrap justify-center items-center p-12 gap-8 ">
        {data?.map((elem) => {
          return <Item key={elem.id} {...elem} />;
        })}
        {isLoading &&
          [...Array(3)].map(() => {
            return <ItemLoading />;
          })}
      </div>
      <Footer />
    </>
  );
}

export default App;
