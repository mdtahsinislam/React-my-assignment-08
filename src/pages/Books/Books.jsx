// import React, { useEffect, useState } from 'react';
// import Book from '../Book/Book';

// const Books = () => {
//   const [allbooks, setAllBooks] = useState([]);
//   const [showAll, setShowAll] = useState(false); // Track whether to show all

//   useEffect(() => {
//     fetch("doctorData.json")
//       .then(res => res.json())
//       .then(data => {
//         setAllBooks(data);
//       });
//   }, []);

//   // Determine how many books to show
//   const booksToShow = showAll ? allbooks : allbooks.slice(0, 6);

//   return (
//     <div className='mx-auto max-w-5xl'>  
//       <div className="text-center">
//         <h1 className="text-2xl font-extrabold text-gray-900">
//           Our Best Doctors
//         </h1>
//         <p className="mt-3 text-gray-500">
//           Our platform connects you with verified, experienced doctors across various specialties—all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-5">
//         {
//           booksToShow.map((singleBook) => (
//             <Book key={singleBook.id} singleBook={singleBook} />
//           ))
//         }
//       </div>

//       {!showAll && allbooks.length > 6 && (
//         <div className="text-center mt-6">
//           <button
//             className="btn btn-primary rounded-full mb-4"
//             onClick={() => setShowAll(true)}
//           >
//             View All Doctors
//           </button>
//         </div>





//       )}
//     </div>
//   );
// };

// export default Books;




// Books.jsx
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { Link } from 'react-router-dom'; // Import Link

const Books = () => {
    const [allbooks, setAllBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("doctorData.json")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
            });
    }, []);

    const booksToShow = showAll ? allbooks : allbooks.slice(0, 6);

    return (
        <div className='mx-auto max-w-5xl'>
            <div className="text-center">
                <h1 className="text-2xl font-extrabold text-gray-900">
                    Our Best Doctors
                </h1>
                <p className="mt-3 text-gray-500">
                    Our platform connects you with verified, experienced doctors across various specialties—all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-5">
                {booksToShow.map((singleBook) => (
                    <Book key={singleBook.id} singleBook={singleBook} />
                ))}
            </div>

            {!showAll && allbooks.length > 6 && (
                <div className="text-center mt-6">
                    <Link to="/doctor-profile"> {/* Use Link to navigate */}
                        <button
                            className="btn btn-primary rounded-full mb-4"
                        >
                            View Doctor Profile {/* Changed button text */}
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Books;
