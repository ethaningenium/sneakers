import reviews from "@/assets/reviews.json";
import Rating from "./Rating";

const Reviews = () => {
  return (
    <section className="w-full flex flex-col gap-8">
      <h2 className="lg:text-3xl text-2xl font-semibold text-gray-900">
        Отзывы наших клиентов:
      </h2>
      <div className="w-full flex overflow-x-scroll gap-4 pb-6 pl-2">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="flex flex-col gap-4 bg-white rounded-2xl shadow-md shadow-black/10 p-4"
            >
              <div className="flex gap-6 ">
                <h4 className="font-semibold text-lg text-gray-800">
                  {review.userFullname}
                </h4>
                <Rating rating={review.rating} />
              </div>
              <p className="w-56 text-xs font-light text-gray-600">
                {review.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
