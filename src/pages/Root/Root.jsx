// import React from 'react';
// import Navbar from '../../commponents/Header/Navbar';
// import { Outlet } from 'react-router';
// import Footer from '../../commponents/Footer/Footer';
// import Last from '../../commponents/Last/Last';

// const Root = () => {
//     return (
//         <div>
//             <Navbar></Navbar>
//             <Outlet></Outlet>
//             <Last></Last>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Root;

// i want when i click My Booking,Blog,Contact us Last not show






import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../commponents/Header/Navbar';
import Footer from '../../commponents/Footer/Footer';
import Last from '../../commponents/Last/Last';

const Root = () => {
    const location = useLocation();

    const showLast = location.pathname === '/';

    return (
        <div>
            <Navbar />
            <Outlet />
            {/* {showLast && <Last />} */}
            {showLast && <Last></Last>}
            <Footer />
        </div>
    );
};

export default Root;
