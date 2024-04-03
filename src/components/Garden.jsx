import React from 'react';
import gardenlogo from "/public/garden.png";

const Garden = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-5 m-5'>
        <img src={gardenlogo} className='h-32 w-32' />
        <div className=''>
          <h1 className='text-left text-2xl'>ཏ་ལའི་བླ་མའི་དགའ་ལྡན་ཕོ་བྲ</h1>
          <h1 className='w-96 text-left text-2xl'>Gaden Phodrang Foundation of the Dalai Lama</h1>
        </div>
      </div>

      <h1 className='content-center text-[#B15D5D] text-4xl font-bold m-5 tracking-wider'>The Dalai Lama Graduate Scholarship</h1>

      <div className='content-center flex flex-col items-center gap-5'>
        <p className='w-[99%] text-lg font-medium tracking-widest'>The Dalai Lama Graduate Scholarships are highly competitive supplementary bursary awarded to outstanding Tibetan students pursuing a full-time graduate degree in any reputable University in Europe, the Americas, Australia and Asia (excluding the Indian subcontinent)
        </p>

        <p className='w-[99%] text-lg font-medium tracking-widest'>
          The purpose of the scholarship program is to further the human capital development of Tibetan people by encouraging the pursuit of excellence among Tibetan students in a graduate field of study that has relevance and potential to contribute to the welfare of humanity and the Tibetan people in particular.
        </p>
      </div>

      <h1 className='text-[#FDB714] font-bold text-4xl mt-5'>ELIGIBILITY</h1>

      <div className=' text-lg font-medium tracking-widest m-5'>
        <p className=' text-left'>For The Dalai Lama Graduate Scholarship Program</p>
        <ol className=' list-outside list-decimal text-left p-5'>
          <li>Applicants must have already been enrolled in or be accepted to a full-time graduate degree program at a university in Europe, the Americas, Australia and Asia (excluding the Indian subcontinent).</li>
          <li>Applicants must show proof of Tibetan heritage and continuity of Dhanglang Chatrel (Green Book) contribution.</li>
          <li>Applicants are solely and directly responsible for obtaining the necessary visas to attend the university of their choice.</li>
          <li>Eligible candidates must be pursuing graduate studies, whether at the master’s or PhD level or at a professional school.</li>
          <li>All graduate programs should be at least one year or multi‐year, full-time courses, offered by reputable and accredited universities. Current recipients who wish to renew their scholarships are required to submit a separate renewal application. However, renewals are limited to two years.</li>
        </ol>
      </div>

      <div className=' flex gap-5 justify-center m-5'> 
        <button className=' p-4 bg-[#FDB714] rounded-xl'>➡️ Apply now for the Scholarship 2024/25</button>

        <button className=' p-4 border border-[#FDB714] rounded-xl'>visit dalai lama foundation website for more info</button> 
      </div>
     
    </div>
  );
};

export default Garden;
