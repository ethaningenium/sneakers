import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

interface IFormInput {
  name: string;
  address: string;
  city: string;
  building: string;
  appartment: string;
  date: string;
  time: string;
  phone: string;
  delivery: string;
  payment: string;
  comments: string;
}

const OrderForm: React.FC = () => {
  const { register, reset, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <main className="flex flex-col items-center">
      <div className="container p-8 sm:py-16 sm:px-8 px-4 flex flex-col gap-16">
        <h2 className="text-xl">Оформление заказа</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-gray-50 flex flex-col gap-8">
          <p className="text-large">Доставка</p>
          <div className="flex gap-4">
            <>
              <input {...register("delivery")} id="takeaway" type="radio" name="delivery" value="takeaway"></input>
              <label htmlFor="takeaway">Самовывоз из магазина</label>
            </>
            <>
              <input
                {...register("delivery")}
                id="delivery"
                type="radio"
                name="delivery"
                value="courier-delivery"
              ></input>
              <label htmlFor="delivery">Курьерская доставка</label>
            </>
          </div>
          <div className="flex gap-4">
            <Input type="text" name="city" register={register} placeholder="Город" />
            <Input type="text" name="address" register={register} placeholder="Улица" />
            <Input type="text" name="building" register={register} placeholder="Дом" />
            <Input type="text" name="appartment" register={register} placeholder="Квартира" />
          </div>
          <p>Время доставки</p>
          <div className="flex gap-4">
            <>
              <input type="date" {...register("date")} />
              <input type="time" {...register("time")} min="09:00" max="20:00" required />
            </>
          </div>
          <div className="flex flex-col gap-8">
            <p>Получатель</p>
            <div className="flex gap-4">
              <Input type="text" name="name" register={register} placeholder="Имя" />
              <Input type="text" name="phone" register={register} placeholder="Телефон" />
            </div>
          </div>
          <p>Оплата</p>
          <>
            <div className="flex gap-4">
              <>
                <input
                  {...register("payment")}
                  id="by-delivery"
                  type="radio"
                  name="payment"
                  value="by-delivery"
                ></input>
                <label htmlFor="by-delivery">Оплата при получении</label>
              </>
              <>
                <input
                  {...register("payment")}
                  id="card-online"
                  type="radio"
                  name="payment"
                  value="card-online"
                ></input>
                <label htmlFor="card-online">Оплата картой онлайн</label>
              </>
            </div>
          </>
          <textarea {...register("comments")} rows={5} className="w-full bg-zinc-100 outline-none p-4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};

export default OrderForm;
