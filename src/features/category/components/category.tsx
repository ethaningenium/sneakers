import { Filters } from "./filters";
import { Header } from "./header";
import { Items } from "./items";

export const Category = () => {
  return (
    <main className="px-4 w-full md:px-8 md:container flex flex-col items-center gap-8 mb-24">
      <Header />
      <div className="w-full flex  gap-8">
        <Filters />
        <div className="w-full flex flex-col gap-4">
          <Items />
        </div>
      </div>
    </main>
  );
};
