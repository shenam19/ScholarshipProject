import React from 'react';
import tcv from '/tcv.png.webp';

const Tcv = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-5 m-5'>
        <img src={tcv} className='h-40 w-44' />
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-semibold'>བོད་ཕྲུག་ཁྱིམ་སྡེ།</h1>
          <h1 className='text-3xl font-black'>Tibetan Children't Village School</h1>
          <p className='text-sm font-semibold'>working for the care and education of Tibetan refugee Children</p>
        </div>
      </div>

      <div>
        <p>some key points you must familiar with TCV scholarship program.</p>

        <div className='m-5'>
          <ul className='text-xl text-left'>
            <li><span className='font-semibold'>“TCV Scholarship Policy Committee”</span> means the committee formed in TCV Head Office to formulate policies, review and oversee the TCV Higher Studies Scholarship Program.</li>
            <li><span className='font-semibold'>“TCV Scholarship Working Committee”</span> means the committee constituted by the TCV Policy Committee to ensure smooth implementation, supervision and control of the program in keeping with the policies and guidelines of the Policy Committee.</li>
            <li><span className='font-semibold'>“Scholarship Program Office”</span> means the special cell in the TCV Head Office responsible for monitoring, control and supervision of the program in keeping with the policies and guidelines of the Policy Committee/Working Committee 5 and maintains all records and contacts with individual students for all matters of purpose including distribution of scholarship amounts.</li>
            <li><span className='font-semibold'>“TCV ward”</span> means a student of TCV whose educational and living expenses are provided by TCV as per records maintained in the Admission Office.</li>
            <li><span className='font-semibold'>“Bona-fide Tibetan”</span> means a Tibetan who holds Registration Certificate (RC) issued to Tibetan refugees by the Government of India and the Green Book (Rangzen Lug-Dep). However, for non-Tibetan wards, this will not be applicable.</li>
          </ul>
        </div>

        <h1 className='text-[#FDB714] font-bold text-4xl mt-5'>Scholarship Category</h1>

        <div>
            <div className=' mt-5'>
            <h1 className=' text-left text-2xl m-2'>After Class X </h1>
            <ul className=' list-decimal text-left text-xl font-normal'>
                <li>Students after completing Class X board exams have the option of taking up a vocational/technical training approved by the Scholarship Policy Committee. </li>
                <li> As a general policy, wards of TCV who do not secure the required marks in class X Board Examination for promotion to   class XI are guided into suitable vocational or technical training approved by the Scholarship Policy Committee. </li>
                <li>Students below class X, who have no academic aptitude will be guided into suitable vocational training    recommendation from branch heads.</li>
            </ul>
            </div>

            <div className=' mt-5'>
                <h1 className=' text-2xl text-left m-2'>After Class XII (Undergraduate Degree Program)</h1>
                <ul className=' text-left text-xl font-normal list-decimal'>
                    <li> Students after completion of +2 Board Examinations are required to apply for the TCV scholarship in June every year to the Scholarship Program Office. The application must be in the prescribed “Application Form” attached to this booklet. Those who do not apply by 30th September will not be considered for any scholarships.</li>
                    <li>From 2018 onwards, apart from professional courses, all students who wish to pursue BA, B.Com, BCA, Tibetan and Chinese language studies and other courses offered at the Dalai Lama Institute for Higher Education (DLIHE), Bangalore must enroll at the Institute for grant of TCV scholarship. Students opting to join courses in other colleges and universities may do so at their own expenses.</li>
                    <li>After completion of first-degree program, scholars may be encouraged to pursue full-time recognized professional or vocational courses depending on approval from the Scholarship Policy Committee.</li>
                </ul>
            </div>

            <div className=' m-2'>
                <h1 className=' text-left text-2xl font-normal mt-5'>Eligibility</h1>
                <ul className=' text-xl font-normal text-left list-decimal'>
                    <li> Only wards of the Tibetan Children’s Village are eligible for General Scholarship in degree program. </li>
                    <li> The minimum percentage required is 60% aggregate in Arts and Commerce stream and 55% in Science Stream (5 subjects - 2 languages and 3 elective subjects) in the +2 Board Examination. This is inclusive of the conduct points. </li>
                    <li> Students under out-reach program are eligible for TCV scholarship provided they obtain 65% aggregate at +2.</li>
                    <li>Compartment and Improvement cases must also secure 55% for Science and 60% for Arts and Commerce in the first attempt (CBSE compartment exam in August). No scholarship is given for subsequent attempts unless in a specific field of specialization in Science stream. Instead, they will be guided into a suitable vocational training.</li>
                    <li>Those who fail in class XII Board Examinations will be guided into a suitable vocational training upon application. </li>
                    <li>TCV +2 vocational students at Mundgod must secure 65% aggregate in all the subjects to appreciate three years degree program scholarship.</li>
                </ul>
            </div>

        </div>
      </div>

      <a href="" className=' text-xl underline'>click below to download and apply for the scholarship now. </a>

      <div className='flex gap-5 justify-center m-5'>
        <button className=' border border-[#FDB714] rounded-xl p-2' >TCV Scholarship Guidelines </button>
        <button className=' border border-[#FDB714] rounded-xl p-2' >Scholarship Form </button>
        <button className=' border border-[#FDB714] rounded-xl p-2' >Scheme for distribution of Scholarship</button>
      </div>
    </div>
  );
};

export default Tcv;
