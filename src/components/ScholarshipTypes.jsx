import React from "react";

const ScholarshipTypes = () => {
  return (
    <div className=" mb-28 mt-10">
      <div className="flex items-center gap-5">
        <div className="h-1 w-10 bg-[#FDB714]" />
        <h2 className="text-[30px] text-[#FDB714]">Scholarship types</h2>
      </div>

      <h1 className="text-[40px] w-[753px] text-left">Different types of scholarships Tibetan communities offer to you</h1>

      <div className="flex gap-40">
        <div>
          <div className="bg-[#FDE19A] w-[631px] h-[548px] flex items-center rounded-3xl z-10"></div>
          <img className="w-[633px] h-[547px] rounded-3xl left-5 static -mt-[80%] ml-20" src="https://i.pinimg.com/564x/13/4b/4e/134b4ef20b0a72c3c5764f23263b1d2c.jpg" />
        </div>

        <div>
          <div>
            <p>Click below links to know more</p>
            <div className="flex flex-col gap-8 mt-8">
              <a className="h-[80px] w-[463px] bg-[#127002] rounded-3xl flex justify-center items-center text-white">all doE scholarships</a>
              <a className="h-[80px] w-[463px] bg-[#127002] rounded-3xl flex justify-center items-center text-white">Dalai Lama Trust scholarship</a>
              <a className="h-[80px] w-[463px] bg-[#127002] rounded-3xl flex justify-center items-center text-white">TCV scholarships</a>
              <a className="h-[80px] w-[463px] bg-[#127002] rounded-3xl flex justify-center items-center text-white">scholarships from Monastries</a>
              <a className="h-[80px] w-[463px] bg-[#127002] rounded-3xl flex justify-center items-center text-white">scholarships from NGOs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTypes;
