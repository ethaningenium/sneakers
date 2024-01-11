import CartList from "./CartList";

const Cart = () => {
  return (
    <main className="flex flex-col items-center py-24">
      <div className="flex flex-col md:flex-row gap-8 items-start container">
        <CartList />
        <div className="w-full md:w-1/3 h-96 bg-gray-400"></div>
      </div>
      <div></div>
    </main>
  );
};

export default Cart;
