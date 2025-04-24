import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (

      
        <div className='text-center card '>
            
            <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
  <h1 className='text-2xl text-black'>You Have not Booked any appoinment yet</h1>
            <p className='text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>



    <div className=" ">
      <Link to='/'> <button className="btn btn-primary">Book an Appointment</button></Link>
     
    </div>
  </div>
</div>


{/* show view Details click details */}




        </div>





    );
    //routes,About,navber
};

export default About;         



