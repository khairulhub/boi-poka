import React from 'react';

import BannerImage from '../../assets/books.jpg';
// import BannerImage from '../../assets/book.ico';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImage}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn text-white bg-[#23BE0A] hover:bg-[#23BE0A] mt-5">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;