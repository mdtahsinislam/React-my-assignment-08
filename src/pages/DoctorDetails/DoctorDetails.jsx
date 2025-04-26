// // // DoctorDetails.jsx
// // import React, { useEffect, useState } from 'react';
// // import { Link, useParams } from 'react-router-dom';
// // import { addToStoredDB } from '../../Utlity/addToDB';

// // const DoctorDetails = () => {
// //     const { id } = useParams();
// //     const [doctor, setDoctor] = useState(null);

// //     useEffect(() => {
// //         fetch('/doctorData.json')
// //             .then(res => res.json())
// //             .then(data => {
// //                 const selected = data.find(doc => doc.id.toString() === id);
// //                 setDoctor(selected);
// //             });
// //     }, [id]);

// //     if (!doctor) {
// //         return <div className="text-center mt-10">Loading Doctor Details...</div>;
// //     }

// //     const { name, image, education, speciality, registrationNumber, experience } = doctor;



// // const handleDoctorClick=id=>{
// //   addToStoredDB(id)

// // }



// //     return (
// //         <div className="p-6 max-w-4xl mx-auto">
// //             <div className="card bg-base-100 shadow-sm mb-6">
// //                 <div className="card-body">
// //                     <h2 className="card-title">Doctor's Profile Details</h2>
// //                     <p>Let's explore some details about this doctor.</p>
// //                 </div>
// //             </div>

           

// // <div className="card card-side bg-base-100 shadow-sm md:flex-row">
// //   <figure className="md:max-w-sm">
// //     <img src={image} alt={name} className="object-cover h-full rounded-l-xl" />
// //   </figure>
// //   <div className="card-body">
// //     <h2 className="card-title">{name}</h2>
// //     <p className="text-gray-600">{education}</p>
// //     <p className="text-gray-600">{speciality}</p>
// //     <p className="text-gray-600">Registration No: {registrationNumber}</p>
// //     <p className="text-gray-600">Experience: {experience} years</p>
// //     <div className="flex flex-wrap gap-1 mt-3">
// //       <button className="btn btn-xs">Availability</button>
// //       <button className="btn btn-outline btn-secondary">Friday</button>
// // <button className="btn btn-outline btn-accent ">Sunday</button>
// // <button className="btn btn-outline btn-info">Monday</button>
// // <button className="btn btn-outline btn-success">Thusday</button>
// // <button className="btn btn-outline btn-warning">Wednesday</button>

// //       {/* You can add more availability buttons based on your data */}
// //     </div>
    
// //   </div>



// // </div>


// // <div class="bg-white rounded-md shadow-sm p-6">
// //  <Link to=''> <h2 class="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h2></Link>
// //   <div class="flex items-center justify-between mb-2">
// //     <span class="text-gray-700">Availability</span>
// //     <span class="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded">Doctor Available Today</span>
// //   </div>
// //   <div class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
// //     <strong class="font-bold">Important!</strong>
// //     <span class="block sm:inline">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
// //   </div>
// //   {/* <Link to='/about</div>'></Link> */}

// //   <Link to='/about'><button onClick={()=>handleDoctorClick(id)}  class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded">
// //     Book Appointment Now
// //   </button></Link>
// // </div>
// //         </div>
// //     );
// // };

// // export default DoctorDetails;




















// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { addToStoredDB } from '../../Utlity/addToDB';

// const DoctorDetails = () => {
//   const { id } = useParams();
//   const [doctor, setDoctor] = useState(null);

//   useEffect(() => {
//     fetch('/doctorData.json')
//       .then(res => res.json())
//       .then(data => {
//         const selected = data.find(doc => doc.id.toString() === id);
//         setDoctor(selected);
//       });
//   }, [id]);

//   if (!doctor) {
//     return <div className="text-center mt-10">Loading Doctor Details...</div>;
//   }

//   const { name, image, education, speciality, registrationNumber, experience } = doctor;

//   const handleDoctorClick = (id) => {
//     addToStoredDB(id);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="card bg-base-100 shadow-sm mb-6">
//         <div className="card-body">
//           <h2 className="card-title">Doctor's Profile Details</h2>
//           <p>Let's explore some details about this doctor.</p>
//         </div>
//       </div>

//       <div className="card card-side bg-base-100 shadow-sm md:flex-row">
//         <figure className="md:max-w-sm">
//           <img src={image} alt={name} className="object-cover h-full rounded-l-xl" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{name}</h2>
//           <p className="text-gray-600">{education}</p>
//           <p className="text-gray-600">{speciality}</p>
//           <p className="text-gray-600">Registration No: {registrationNumber}</p>
//           <p className="text-gray-600">Experience: {experience} years</p>
//           <div className="flex flex-wrap gap-1 mt-3">
//             <button className="btn btn-xs">Availability</button>
//             <button className="btn btn-outline btn-secondary">Friday</button>
//             <button className="btn btn-outline btn-accent">Sunday</button>
//             <button className="btn btn-outline btn-info">Monday</button>
//             <button className="btn btn-outline btn-success">Thursday</button>
//             <button className="btn btn-outline btn-warning">Wednesday</button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-md shadow-sm p-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h2>
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-gray-700">Availability</span>
//           <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded">Doctor Available Today</span>
//         </div>
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
//           <strong className="font-bold">Important!</strong>
//           <span className="block sm:inline"> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
//         </div>

//         <Link to='/about'>
//           <button
//             onClick={() => handleDoctorClick(id)}
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
//           >
//             Book Appointment Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DoctorDetails;














import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToStoredDB } from '../../Utlity/addToDB';

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch('/doctorData.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(doc => doc.id.toString() === id);
        setDoctor(selected);
      });
  }, [id]);

  if (!doctor) {
    return <div className="text-center mt-10">Loading Doctor Details...</div>;
  }

  const { name, image, education, speciality, registrationNumber, experience } = doctor;

  const handleDoctorClick = (id) => {
    addToStoredDB(id);
    localStorage.setItem('appointmentBooked', 'true'); // <-- Save appointment flag here
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="card bg-base-100 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title">Doctor's Profile Details</h2>
          <p>Let's explore some details about this doctor.</p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-sm md:flex-row">
        <figure className="md:max-w-sm">
          <img src={image} alt={name} className="object-cover h-full rounded-l-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-600">{education}</p>
          <p className="text-gray-600">{speciality}</p>
          <p className="text-gray-600">Registration No: {registrationNumber}</p>
          <p className="text-gray-600">Experience: {experience} years</p>
          <div className="flex flex-wrap gap-1 mt-3">
            <button className="btn btn-xs">Availability</button>
            <button className="btn btn-outline btn-secondary">Friday</button>
            <button className="btn btn-outline btn-accent">Sunday</button>
            <button className="btn btn-outline btn-info">Monday</button>
            <button className="btn btn-outline btn-success">Thursday</button>
            <button className="btn btn-outline btn-warning">Wednesday</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-700">Availability</span>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded">Doctor Available Today</span>
        </div>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Important!</strong>
          <span className="block sm:inline">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
        </div>

        {/* Link to /about after booking */}
        <Link to='/about'>
          <button
            onClick={() => handleDoctorClick(id)}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded"
          >
            Book Appointment Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;


