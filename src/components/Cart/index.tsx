import SimilarItems from "../FullScreen/SimilarItemsX";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

const Cart = () => {
  return (
    <main className="flex flex-col items-center py-24 gap-24 container">
      <div className="flex flex-col md:flex-row gap-8 items-start w-full">
        <CartList />
        <CartSummary />
      </div>
      <SimilarItems title="С этими товарами покупают: " />
    </main>
  );
};

export default Cart;
