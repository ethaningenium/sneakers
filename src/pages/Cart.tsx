import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItem from "@/components/Cart/CartItem";

function Cart() {
  return (
    <>
      <Header />
      <div>
        <div className="flex gap-28 items-center justify-between mx-96 my-10">
          <span>Корзина</span>
          <a href="#">Очистить корзину</a>
        </div>

        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <Footer />
    </>
  );
}

export default Cart;
