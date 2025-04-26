// import React from 'react';
// import { Link } from 'react-router';
// import Rechart from '../../Routes/Rechart/Rechart';
// import ReadList from '../../commponents/ReadList/ReadList';
// import MyLineChart from '../MyLineChart/MyLineChart';

// const About = () => {
//     return (

      
//         <div className='text-center card '>
            
//              <div className="CARD-About card bg-base-100  shadow-sm ">  {/*all ways show Shection */}
//   <div className="card-body">
//   <h1 className='text-2xl text-black'>You Have not Booked any appoinment yet</h1>
//             <p className='text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>



//     <div className=" ">
//       <Link to='/'> <button className="btn btn-primary">Book an Appointment</button></Link>
     
//     </div>
//   </div>
// </div>




// <div >
//   <MyLineChart></MyLineChart>
// <Rechart></Rechart>
// <ReadList></ReadList>
// </div>


//         </div>





//     );
//     //routes,About,navber
// };

// export default About;         








// write this code modify the code    if i onclick  DoctorDetails page   Book Appointment Now Button CARD-About  it hide  






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import Rechart from '../../Routes/Rechart/Rechart';
// import ReadList from '../../commponents/ReadList/ReadList';
// import MyLineChart from '../MyLineChart/MyLineChart';

// const About = () => {
//     const [appointmentBooked, setAppointmentBooked] = useState(false);

//     useEffect(() => {
//         const booked = localStorage.getItem('appointmentBooked');
//         if (booked === 'true') {
//             setAppointmentBooked(true);
//         }
//     }, []);

//     return (
//         <div className='text-center card '>
            
//             {!appointmentBooked && (
//                 <div className="CARD-About card bg-base-100 shadow-sm">
//                     <div className="card-body">
//                         <h1 className='text-2xl text-black'>You Have not Booked any appointment yet</h1>
//                         <p className='text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
//                         <div>
//                             <Link to='/'>
//                                 <button className="btn btn-primary">Book an Appointment</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div>
//                 <MyLineChart />
//                 <Rechart />
//                 <ReadList />
//             </div>
//         </div>
//     );
// };

// export default About;





// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // <-- Notice useLocation
// import Rechart from '../../Routes/Rechart/Rechart';
// import ReadList from '../../commponents/ReadList/ReadList';
// import MyLineChart from '../MyLineChart/MyLineChart';

// const About = () => {
//     const [appointmentBooked, setAppointmentBooked] = useState(false);
//     const location = useLocation(); // <-- important

//     useEffect(() => {
//         const booked = localStorage.getItem('appointmentBooked');
//         if (booked === 'true') {
//             setAppointmentBooked(true);
//         }
//     }, [location]); // <-- listen to route change!

//     return (
//         <div className='text-center card '>
//             {!appointmentBooked && (
//                 <div className="CARD-About card bg-base-100 shadow-sm">
//                     <div className="card-body">
//                         <h1 className='text-2xl text-black'>You Have not Booked any appointment yet</h1>
//                         <p className='text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
//                         <div>
//                             <Link to='/'>
//                                 <button className="btn btn-primary">Book an Appointment</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div>
//                 <MyLineChart />
//                 <Rechart />
//                 <ReadList />
//             </div>
//         </div>
//     );
// };

// export default About;






import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Rechart from '../../Routes/Rechart/Rechart';
import ReadList from '../../commponents/ReadList/ReadList';
import MyLineChart from '../MyLineChart/MyLineChart';

const About = () => {
    const [appointmentBooked, setAppointmentBooked] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const booked = localStorage.getItem('appointmentBooked');
        if (booked === 'true') {
            setAppointmentBooked(true);
        }
    }, [location]);

    return (
        <div className='text-center card'>
            {/* If no appointment booked, show message */}
            {!appointmentBooked ? (
                <div className="CARD-About card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h1 className='text-2xl text-black'>You Have not Booked any appointment yet</h1>
                        <p className='text-gray-400'>
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        <div>
                            <Link to='/'>
                                <button className="btn btn-primary">Book an Appointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                // If appointment is booked, show other components
                <div>
                    <MyLineChart />
                    <Rechart />
                    <ReadList />
                </div>
            )}
        </div>
    );
};

export default About;

