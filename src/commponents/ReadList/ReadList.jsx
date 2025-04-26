// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const ReadList = () => {
//     const [doctors, setDoctors] = useState([]);

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await fetch('/doctorData.json');
//                 const data = await response.json();
//                 setDoctors(data);
//             } catch (error) {
//                 console.error('Error fetching doctors:', error);
//             }
//         };

//         fetchDoctors();
//     }, []);

//     // Process doctor data for the line chart
//     const chartData = doctors.map(doctor => ({
//         name: doctor.name,
//         fees: doctor.fees,
//     }));

//     // Define the Y-axis ticks you want to display
//     const yAxisTicks = [5, 10, 15];

//     return (
//         <div>
//             <div className='text-center'>
//                 <h1>Doctor Fees</h1>
//                 <p className="mt-3 text-gray-500">
//                     A visual representation of the consultation fees of our doctors.
//                 </p>
//             </div>

//             {/* Line Chart Section */}
//             <div className="mb-8 bg-white rounded-md shadow-md p-4">
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                         <CartesianGrid stroke="#d1d5db" strokeDasharray="5 5" />
//                         <XAxis dataKey="name" className="text-gray-600 text-sm" /> {/* Doctor's name on X-axis */}
//                         <YAxis dataKey="fees" className="text-gray-600 text-sm" ticks={yAxisTicks} orientation="right" /> {/* Doctor's fees on right Y-axis */}
//                         <Tooltip formatter={(value) => [`Fee: ${value}`, '']} labelFormatter={(value) => `Doctor: ${value}`} />
//                         <Line type="monotone" dataKey="fees" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5 }} /> {/* Display fees as the line value with dots */}
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* List of Doctors */}
//             {doctors.map((doctor) => (
//                 <div key={doctor.id} className=''>
//                     <div className='flex justify-between card mb-2 bg-base-300 gap-3 max-w-5xl mx-auto'>
//                         <div className='text-left ml-2'>
//                             <p>{doctor.name}</p>
//                             <p>{doctor.education}</p>
//                         </div>
//                         <div className='mb-5 mr-2'>
//                             <p className='text-right'>Appoinment Fee: {doctor.fees}</p>
//                         </div>
//                         <button className='btn btn-outline btn-secondary'> Cancel Appoinment</button>
//                     </div>
                 
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReadList;      










// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const ReadList = () => {
//     const [doctors, setDoctors] = useState([]);

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await fetch('/doctorData.json');
//                 const data = await response.json();
//                 setDoctors(data);
//             } catch (error) {
//                 console.error('Error fetching doctors:', error);
//             }
//         };

//         fetchDoctors();
//     }, []);

//     // Function to handle canceling an appointment (removing a doctor)
//     const handleCancelAppointment = (doctorId) => {
//         const updatedDoctors = doctors.filter(doctor => doctor.id !== doctorId);
//         setDoctors(updatedDoctors);
//     };

//     // Process doctor data for the line chart
//     const chartData = doctors.map(doctor => ({
//         name: doctor.name,
//         fees: doctor.fees,
//     }));

//     // Define the Y-axis ticks you want to display
//     const yAxisTicks = [5, 10, 15];

//     return (
//         <div>
//             <div className='text-center'>
//                 <h1>Doctor Fees</h1>
//                 <p className="mt-3 text-gray-500">
//                     A visual representation of the consultation fees of our doctors.
//                 </p>
//             </div>

//             {/* Line Chart Section */}
//             <div className="mb-8 bg-white rounded-md shadow-md p-4">
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                         <CartesianGrid stroke="#d1d5db" strokeDasharray="5 5" />
//                         <XAxis dataKey="name" className="text-gray-600 text-sm" /> {/* Doctor's name on X-axis */}
//                         <YAxis dataKey="fees" className="text-gray-600 text-sm" ticks={yAxisTicks} orientation="right" /> {/* Doctor's fees on right Y-axis */}
//                         <Tooltip formatter={(value) => [`Fee: ${value}`, '']} labelFormatter={(value) => `Doctor: ${value}`} />
//                         <Line type="monotone" dataKey="fees" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5 }} /> {/* Display fees as the line value with dots */}
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* List of Doctors */}
//             {doctors.map((doctor) => (
//                 <div key={doctor.id} className=''>
//                     <div className='flex justify-between card mb-2 bg-base-300 gap-3 max-w-5xl mx-auto'>
//                         <div className='text-left ml-2'>
//                             <p>{doctor.name}</p>
//                             <p>{doctor.education}</p>
//                         </div>
//                         <div className='mb-5 mr-2'>
//                             <p className='text-right'>Appoinment Fee: {doctor.fees}</p>
//                         </div>
//                         <button
//                             className='btn btn-outline btn-secondary'
//                             onClick={() => handleCancelAppointment(doctor.id)}
//                         >
//                             Cancel Appoinment
//                         </button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReadList;  //////continue




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ReadList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/doctorData.json');
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    // Function to handle canceling an appointment (removing a doctor)
    const handleCancelAppointment = (doctorId) => {
        const updatedDoctors = doctors.filter(doctor => doctor.id !== doctorId);
        setDoctors(updatedDoctors);
    };

    // Process doctor data for the line chart
    const chartData = doctors.map(doctor => ({
        name: doctor.name,
        fees: doctor.fees,
    }));

    // Define the Y-axis ticks you want to display
    const yAxisTicks = [5, 10, 15];

    return (
        <div>
            <div className='text-center'>
                <h1>Doctor Fees</h1>
                <p className="mt-3 text-gray-500">
                    A visual representation of the consultation fees of our doctors.
                </p>
            </div>

            {/* Conditionally render the Line Chart */}
            {doctors.length > 0 && (
                <div className="mb-8 bg-white rounded-md shadow-md p-4">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid stroke="#d1d5db" strokeDasharray="5 5" />
                            <XAxis dataKey="name" className="text-gray-600 text-sm" /> {/* Doctor's name on X-axis */}
                            <YAxis dataKey="fees" className="text-gray-600 text-sm" ticks={yAxisTicks} orientation="right" /> {/* Doctor's fees on right Y-axis */}
                            <Tooltip formatter={(value) => [`Fee: ${value}`, '']} labelFormatter={(value) => `Doctor: ${value}`} />
                            <Line type="monotone" dataKey="fees" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5 }} /> {/* Display fees as the line value with dots */}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}

            {/* List of Doctors */}
            {doctors.map((doctor) => (
                <div key={doctor.id} className=''>
                    <div className='flex justify-between card mb-2 bg-base-300 gap-3 max-w-5xl mx-auto'>
                        <div className='text-left ml-2'>
                            <p>{doctor.name}</p>
                            <p>{doctor.education}</p>
                        </div>
                        <div className='mb-5 mr-2'>
                            <p className='text-right'>Appoinment Fee: {doctor.fees}</p>
                        </div>
                        <button
                            className='btn btn-outline btn-secondary'
                            onClick={() => handleCancelAppointment(doctor.id)}
                        >
                            Cancel Appoinment
                        </button>
                    </div>
                </div>
            ))}

            {/* Display a message when no doctors are available */}
            {doctors.length === 0 && (
                <p className="text-center text-gray-600">No appointments booked yet.</p>
            )}
        </div>
    );
};

export default ReadList;
























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const ReadList = () => {
//     const [doctors, setDoctors] = useState([]);

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await fetch('/doctorData.json');
//                 const data = await response.json();
//                 setDoctors(data);
//             } catch (error) {
//                 console.error('Error fetching doctors:', error);
//             }
//         };

//         fetchDoctors();
//     }, []);

//     // Process doctor data for the line chart
//     const chartData = doctors.map(doctor => ({
//         name: doctor.name,
//         fees: doctor.fees,
//     }));

//     return (
//         <div>
//             <div className='text-center'>
//                 <h1>Doctor Fees</h1>
//                 <p className="mt-3 text-gray-500">
//                     A visual representation of the consultation fees of our doctors.
//                 </p>
//             </div>

//             {/* Line Chart Section */}
//             <div className="mb-8 bg-white rounded-md shadow-md p-4">
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={chartData}>
//                         <CartesianGrid stroke="#d1d5db" strokeDasharray="5 5" />
//                         <XAxis dataKey="name" className="text-gray-600 text-sm" /> {/* Doctor's name on X-axis */}
//                         <YAxis dataKey="fees" className="text-gray-600 text-sm" /> {/* Doctor's fees on Y-axis */}
//                         <Tooltip formatter={(value) => [`Fee: ${value}`, '']} labelFormatter={(value) => `Doctor: ${value}`} />
//                         <Line type="monotone" dataKey="fees" stroke="#3b82f6" strokeWidth={2} dot={{ r: 5 }} /> {/* Display fees as the line value with dots */}
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* List of Doctors */}
//             {doctors.map((doctor) => (
//                 <div key={doctor.id} className=''>
//                     <div className='flex justify-between card mb-2 bg-base-300 gap-3 max-w-5xl mx-auto'>
//                         <div className='text-left ml-2'>
//                             <p>{doctor.name}</p>
//                             <p>{doctor.education}</p>
//                         </div>
//                         <div className='mb-5 mr-2'>
//                             <p className='text-right'>Appoinment Fee: {doctor.fees}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReadList;




