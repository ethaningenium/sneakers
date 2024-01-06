import { X } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex gap-28 items-center justify-center">
      <div className="flex gap-4 items-center">
        <img
          className="w-44"
          src="https://haslestore.com/_next/image?url=https%3A%2F%2Fhaslestore.com%2Fstorage%2Fimport_files%2Fb1%2Fb12be1af74a511eebaf12c44fd7ae203_7297a9ff7efc11eebaf12c44fd7ae203.jpg&w=3840&q=75"
          alt="NIKE AIR JORDAN 13 RETRO"
        />
        <span>Nike Air Jordan 13 Retro</span>
      </div>

      <div className="flex gap-1">
        <div>-</div>
        <div>1</div>
        <div>+</div>
      </div>

      <span>4520 руб.</span>
      <X />
    </div>
  );
};

export default CartItem;
