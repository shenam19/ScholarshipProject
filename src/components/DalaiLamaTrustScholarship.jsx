import React from "react";

const DalaiLamaTrustScholarship = () => {
  return (
    <>
      <div className="text-left">
        <div className="header">
          <h1 className="text-3xl font-bold text-center text-[#B15D5D] mb-4">
            THE DALAI LAMA TRUST SCHOLARSHIP 2023
          </h1>
          <p className=" mb-4">
            The Dalai Lama Trust is delighted to announce ‘
            <span className="text_maroon ">
              The Dalai Lama Trust Scholarship
            </span>{" "}
            ’ for the year 2023. This scholarship is fully funded and
            administered by The Dalai Lama Trust, Office of His Holiness the
            Dalai Lama.
          </p>
          <p className="text_maroon mb-4">
            Some important requirements for this scholarship were mentioned
            below. to know more please click the <br></br>link for further
            informations.
          </p>
        </div>
        <div className="middle flex mb-10">
          <div className="types uppercase  text-3xl uppercase text_yellow  pr-10 mr-10 border-r-2 flex flex-col items-center border-[#FDB714]">
            <h1 className="font-bold text-5xl underline mb-3">types of </h1>
            <h2>scholarships</h2>
          </div>
          <div className="sideText">
            <h2 className="text-xl">A. UNDERGRADUATE SCHOLARSHIPS</h2>
            <p className="ml-6">
              100 scholarships for the Undergraduate or Diploma Program of
              minimum 3 years.
            </p>
            <h2 className="text-xl">B. POSTGRADUATE SCHOLARSHIPS</h2>
            <p className="ml-6">5 scholarships to the Postgraduate Program.</p>
          </div>
        </div>
        <div className="end">
          <h1 className="font-bold uppercase text-center text_yellow underline  ">
            deadlines
          </h1>
          <p className="text-center mb-10">
            Eligible candidates must apply online by May 31st, 2023 for
            Undergraduate scholarship and June 30th, which has been <br />{" "}
            extended to August 31st, 2023 for Postgraduate scholarship.
            Applications received after the deadline and incomplete <br />{" "}
            application and/or documentation will be disqualified. 
          </p>
          <h1 className="text-2xl uppercase font-bold underline text_yellow ">
            documents you needed
          </h1>
          <h2>Undergraduate Scholarship</h2>
          <p> A. GB (front and back)</p>
          <p> B. RC</p>
          <p> C. Class X Mark sheet</p>
          <p> D. Class XII Mark sheet</p>
          <p>E. Best Boy/Girl Certificate if applicable.</p>
          <p> F. Passport photo</p>
          <p> G.  Duly filled “Form-A” and/or “Form-B” where required</p>
          <p className="my-2">
            {" "}
            Please compile all documents except passport photo into a single PDF
            file. Please check our{" "}
            <span className="text_maroon">sample document file</span>  for the
            required format.
          </p>
          <h2>Postgraduate Scholarship</h2>
          <p>A. GB (front and back)</p>
          <p>B. RC</p>
          <p>
            C. Undergraduate Mark sheet (in chronological order of each year of
            course)
          </p>
          <p>
            {" "}
            D. Provisional Degree Certificate or Degree Certificate if available
          </p>
          <p>E. Internship completion certificate where applicable</p>
          <p>F. Passport photo</p>

          <p className="my-2">
            Please compile all documents except passport photo into a single PDF
            file. Please check our{" "}
            <span className="text_maroon">sample document file</span>  for the
            required format.
          </p>
          <button
            type="submit"
            className="border border-[#B15D5D] text_maroon text-center ml-[40%] my-10 px-10 py-4 rounded-[20px]"
          >
            visit dalai lama trust website for more infos
          </button>
        </div>
      </div>
    </>
  );
};

export default DalaiLamaTrustScholarship;
