// const getStoredBook = () => {
//     const storedBookSTR = localStorage.getItem("readList");
//     if (storedBookSTR) {
//       return JSON.parse(storedBookSTR);
//     } else {
//       return []; // 🛠 Fix: properly return empty array
//     }
//   };
  
//   const addToStoredDB = (id) => {
//     const storeBookData = getStoredBook();
  
//     if (storeBookData.includes(id)) {
//       alert("Id already exists");
//     } else {
//       storeBookData.push(id);
//       localStorage.setItem("readList", JSON.stringify(storeBookData)); // ✅ Save back to localStorage
//       alert("Appointment booked successfully!");
//        console.log("Updated readList:", storeBookData);
    
//     }
//   };
  
//   export { addToStoredDB ,getStoredBook};
  











const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    try {
      return JSON.parse(storedBookSTR);
    } catch (e) {
      console.error("Error parsing stored data", e);
      return [];
    }
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storeBookData = getStoredBook();

  if (storeBookData.includes(id)) {
    alert("Id already exists");
  } else {
    storeBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storeBookData)); // Save back to localStorage
    alert("Appointment booked successfully!");
    console.log("Updated readList:", storeBookData);
  }
};

export { addToStoredDB, getStoredBook };
