import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    review,
    bookId: currentBookId,
  } = book;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="bg-[#F3F3F3] rounded-2xl">
        <img
          src={image}
          className="max-h-[564px] max-w-[425px]"
          alt={bookName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <div className="border-t-2 border-dashed border-gray-700"></div>
        <p>
          <small>{author}</small>
        </p>
        <div className="border-t-2 border-dashed border-gray-700"></div>
        <p className="max-w-[549px]">
          <span className="font-bold">Review</span>: {review}
        </p>
        <div className="flex gap-3">
          <span className="font-bold">Tag:</span>{" "}
          {tags.map((tags, index) => (
            <button
              key={index}
              className="btn btn-xs text-[#23BE0A] bg-green-200"
            >
              {tags}
            </button>
          ))}
        </div>
        <div className="border-t-2 border-dashed border-gray-700"></div>
        <div>
          <h4>Number of Pages : {totalPages}</h4>
          <h4 className="mt-3">Publisher : {publisher}</h4>
          <h4 className="mt-3">Year of Publishing : {yearOfPublishing}</h4>
          <h4 className="mt-3">Rating : {rating}</h4>
        </div>
        <div className="card-actions justify-start">
          <button className="btn btn-outline mr-4 btn-primary">Read</button>
          <button className="btn btn-primary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
