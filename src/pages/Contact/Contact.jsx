import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div>
            {/* <h1>Hellow i am contact</h1> */}
            




            <div className="card bg-base-100 max-w-5xl mx-auto text-center shadow-sm">
  <div className="card-body items-center">
  <img className='max-w-3/12 '  src="https://i.ibb.co.com/Kz3BLLbh/errrrr.jpg" alt="" />
    <h2 className="card-title">404-Page Not Found</h2>
    <p>Page you looking is does not exit</p>
    <div className="card-actions justify-end">
        <Link to='/'> <button className="btn btn-primary">Go to Home</button></Link>
     
    </div>
  </div>
</div>


        </div>
    );
};

export default Contact;