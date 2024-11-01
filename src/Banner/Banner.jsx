import BannerImg from "../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="size-2/5" src={BannerImg} />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn btn bg-[#23BE0A] hover:bg-[#59C6D2] px-11 my-7">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
