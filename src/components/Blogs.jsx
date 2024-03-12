import React from "react";

const Blogs = () => {
  return (
    <>
      <h1 className="text-3xl w-1/2   hr-blogs mb-4 ">
        <span className="ml-16 text-left block tracking-wide">Blogs</span>
      </h1>
      <h2 className="text-5xl  text-left w-3/4 mb-4">
        Stories from different Tibetan Students studying in different countries.
      </h2>
      <div className="blog_container flex  items-stretch gap-4 mb-4">
        <div className="image-container w-3/5 relative ">
          <img
            src="https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-box absolute bottom-8 text-white left-10">
            <h2 className="name-lines">
              <span className="text-left block ml-8">Tenzin Pema</span>
            </h2>
            <p className="ml-8">
              University of Korea in Business Administration
            </p>
          </div>
        </div>
        <div className="image-container w-2/5 h-full relative">
          <img
            className="h-[428px]"
            src="https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-box absolute bottom-8 text-white left-10">
            <h2 className="name-lines">
              <span className="text-left block ml-8">Tenzin Pema</span>
            </h2>
            <p className="ml-8">
              University of Korea in Business Administration
            </p>
          </div>
        </div>
      </div>
      <div className="blog_container flex  items-stretch gap-4">
        <div className="image-container w-2/5 h-full relative">
          <img
            className="h-[428px]"
            src="https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-box absolute bottom-8 text-white left-10">
            <h2 className="name-lines">
              <span className="text-left block ml-8">Tenzin Pema</span>
            </h2>
            <p className="ml-8">
              University of Korea in Business Administration
            </p>
          </div>
        </div>
        <div className="image-container w-3/5 relative ">
          <img
            src="https://plus.unsplash.com/premium_photo-1709405755034-c8da5f836657?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-box absolute bottom-8 text-white left-10">
            <h2 className="name-lines">
              <span className="text-left block ml-8">Tenzin Pema</span>
            </h2>
            <p className="ml-8">
              University of Korea in Business Administration
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-green-700 rounded-3xl py-3 px-10 text-center border-none text-white mt-8 mb-20"
      >
        Explore More
      </button>
    </>
  );
};

export default Blogs;
