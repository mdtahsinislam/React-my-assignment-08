import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-white rounded-md p-6 shadow-md text-center">
  <h2 className="text-xl font-semibold text-red-500 mb-2">No Doctor Found!!</h2>
  <p className="text-gray-600 text-sm mb-4">No Doctor Found with this registration No-</p>
  <div className="flex items-center justify-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-gray-700 text-sm">BD-dvfdgvdfgfdgv</span>
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    View All Doctors
  </button>
</div>
        </div>
    );
};

export default ErrorPage;