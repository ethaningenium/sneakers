import { CartList } from "@/features/cart";
import { CartSummary } from "@/features/summary";
import { Header } from "@/layouts/header";
import { Footer } from "@/layouts/footer";
import { SimilarItems } from "@/features/sneakers-page";
import { useEffect } from "react";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-12 gap-24 container">
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">
          <CartList />
          <CartSummary />
        </div>
        <SimilarItems title="С этими товарами покупают: " />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
