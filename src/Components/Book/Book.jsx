import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookName, author, image, tags, category, bookId } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl p-6 mx-6 my-6">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className=" flex justify-center gap-5 ">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs bg-green-100 text-green-600"
            >
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>BY: {author}</p>
        <div className="divider divider-neutral"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
        <div className="flex justify-center ml-4">
          <Link to={`/books/${bookId}`}>
            <button className="btn btn-outline btn-info  text-black font-bold ">
              Book-Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
