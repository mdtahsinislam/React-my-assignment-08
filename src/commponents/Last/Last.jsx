import React from 'react';
import { Links } from 'react-router';
const Last = () => {
    return (
        <div>
          


    <div className="bg-gray-100  max-w-5xl mx-auto  mt-5 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        We Provide Best Medical Services
      </h2>
      <p className="mt-2 text-lg text-gray-500">
        Our platform connects you with verified, experienced doctors across various specialties - all at your convenience.
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="mb-4">
          <img src="./src/assets/success-doctor.png" alt="Total Doctors" className="w-12 h-12 object-contain" />
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">199+</p>
          <p className="text-gray-500">Total Doctors</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="mb-4">
          <img src="./src/assets/success-review.png" alt="Total Reviews" className="w-12 h-12 object-contain" />
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">467+</p>
          <p className="text-gray-500">Total Reviews</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="mb-4">
          <img src="./src/assets/success-patients.png" alt="Patients" className="w-12 h-12 object-contain" />
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">1900+</p>
          <p className="text-gray-500">Patients</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="mb-4">
          <img src="./src/assets/success-staffs.png" alt="Total Staffs" className="w-12 h-12 object-contain" />
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-black">300+</p>
          <p className="text-gray-500">Total Staffs</p>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Last;