// import React from 'react';

// const Blog = () => {
//     return (
//         <div>
//            i have a json data file which name is blogg.json  i want to fetch and map and show data here            whent data show it loader <span class="loading loading-spinner text-success"></span>      json data is   




//            [
//     {
//       "question": "What is useState and how does it work in React?",
//       "answer": "useState is a Hook that lets you add state to functional components in React. You call it inside a component and pass an initial value. It returns an array with two elements: the current state and a function to update that state. For example: const [count, setCount] = useState(0);",
//       "dateAdded": "2025-04-24"
//     },
//     {
//       "question": "What is the purpose of useEffect in React?",
//       "answer": "useEffect is a Hook that lets you perform side effects in function components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. You can use it to fetch data, directly update the DOM, set up subscriptions, etc.",
//       "dateAdded": "2025-04-24"
//     },
//     {
//       "question": "What is a custom hook in React and when should you use one?",
//       "answer": "A custom hook is a JavaScript function that starts with 'use' and can call other hooks. You use them to extract and reuse stateful logic across multiple components, keeping your code cleaner and more maintainable. For example, useAuth or useFetch.",
//       "dateAdded": "2025-04-24"
//     },
//     {
//       "question": "Difference between controlled and uncontrolled components? Which one is better?",
//       "answer": "Controlled components are form elements whose value is controlled by React state. Uncontrolled components rely on the DOM to manage their own state using refs. Controlled components are preferred for consistent, predictable behavior and easier validation, but uncontrolled may be simpler for quick forms.",
//       "dateAdded": "2025-04-24"
//     },
//     {
//       "question": "Tell us something about useFormStatus() (explore and explain)",
//       "answer": "useFormStatus is a hook from the React experimental/next feature set used primarily with the <form> element when using React Server Components (RSC). It provides real-time feedback on form submission status, like whether the form is pending or has errors. This is useful for showing spinners, disabling buttons, or giving user feedback during submission.",
//       "dateAdded": "2025-04-24"
//     }
//   ]
  



//         </div>
//     );
// };

// export default Blog;





// import React, { useEffect, useState } from 'react';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Adjust the path if blogg.json is in a different folder (e.g., /public or /src/data/)
//     fetch('/blogg.json')
//       .then(res => res.json())
//       .then(data => {
//         setBlogs(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching blog data:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">React Blog Q&A</h2>

//       {loading ? (
//         <div className="flex justify-center items-center h-40">
//           <span className="loading loading-spinner text-success"></span>
//         </div>
//       ) : (
//         blogs.map((item, index) => (
//           <div key={index} className="mb-6 p-4 border border-gray-200 rounded shadow-sm bg-white">
//             <h3 className="text-xl font-semibold text-blue-600">{item.question}</h3>
//             <p className="text-gray-700 mt-2">{item.answer}</p>
//             <p className="text-sm text-gray-400 mt-1">📅 Added on: {item.dateAdded}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Blog;




import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogg.json')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        // Force loader to show for 30 seconds
        setTimeout(() => {
          setLoading(false);
        }, 300);
      })
      .catch(err => {
        console.error('Error fetching blog data:', err);
        setLoading(false); // Still stop loader if error occurs
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center"> Blogs</h2>
      <p className='text-gray-300 text-center mb-4'>Let's explore some basic concept that will make you a good developer</p>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : (
        blogs.map((item, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-200 rounded shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-blue-600">{item.question}</h3>
            <p className="text-gray-700 mt-2">{item.answer}</p>
            <p className="text-sm text-gray-400 mt-1">📅 Added on: {item.dateAdded}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
