import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data=use(bookPromise)
    // console.log(data)
    console.log(singleBook)

const {name,image,education,speciality,experience,registrationNumber,id}=singleBook;

    return (
        <div>
           
           <div className="card  bg-base-100 shadow-sm"> 
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
 
    <img className='w-[200px] h-[200px]'  src={image} alt="" />

<div className='flex gap-3 '>
  <button className="btn btn-outline btn-success rounded-r-full rounded-l-full">Available</button>
  <button  class="btn btn-outline btn-primary rounded-r-full rounded-l-full">Experience : {experience}+</button>
</div>
      <h1 className='text-black font-bold'> {name}</h1>
      <p className='border-b-1 border-dashed'>{education}</p>
      <p>RegistrationNumber: {registrationNumber}</p>
      <div>
        
      </div>
   <Link to={`/about/${id}`}>
   <div className="mt-6">
      <button className="btn btn-outline btn-primary btn-block rounded-r-full rounded-l-full">View Details</button>
    </div>
   </Link>
  </div>
</div>
                
        </div>
    );
};

export default Book;