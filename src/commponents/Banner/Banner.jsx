import React from 'react';

const Banner = () => {
    return (
       //linear-gradient(180.00deg, rgba(255, 255, 255, 0)
            // <div className='bg-green,rgb(255, 255, 255) 100%) rounded-lg max-w-6xl'>
            //      <div className='text-center'>
            //         <h1>Dependable Care, Backed by Trusted Professionals.</h1>
            //         <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            //      </div>
            //                  <div className='flex items-center'>
            //                    <div> <input type="text" placeholder="Type here" className="input" /></div>
            //                        <div>  <button className="btn btn-primary">Primary</button></div>
            //                  </div>  



            //                  <div className='flex'>
            //                 <img src="./src/assets/banner-img-1.png" alt="" />
            //                 <img src="./src/assets/doctor-sample.png" alt="" />
            //                  </div>






            // </div>



//bg-gradient-to-b from-transparent to-white


<div className="bg-base-300 shadow-sm max-w-5xl mx-auto  mb-16 border-2 border-white  rounded-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-2xl font-extrabold text-gray-900 ">
        Dependable Care, Backed by Trusted Professionals.
      </h1>
      <p className="mt-3  text-gray-500">
        Our platform connects you with verified, experienced doctors across various specialties—all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
    <div className="mt-6 flex justify-center">
      <div className=" w-full sm:w-md flex  gap-2">
        {/* <div className="relative flex-grow focus-within:z-10">
          <input                    .........
            type="text"
            placeholder="Search any doctor..."
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md rounded-r-none  sm:text-sm border-gray-300"
          />
        </div> */}

           <input type="text" placeholder="Search any doctor" className="input rounded-l-full rounded-r-full" />

        <button
          type="button"
          className="  rounded-l-full rounded-r-full   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none text-white font-medium rounded-md  shadow-sm px-4 py-2 sm:text-sm"
        >
          <small>Search Now</small>
        </button>
      </div>
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          className="object-cover w-full h-full"
          src="https://i.ibb.co.com/1YXDVwRk/banner-img-1.png"
          alt="Doctor and Patient"
        />
      </div>
      <div className="relative overflow-hidden rounded-lg shadow-lg ">
        <img
          className="object-cover w-full h-full"
          src="https://i.ibb.co.com/1YXDVwRk/banner-img-1.png"
          alt="Another Doctor and Patient"
        />
      </div>
    </div>
  </div>
</div>











////************ */



















        
    );
};

export default Banner;