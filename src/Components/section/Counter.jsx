import React, { useEffect, useState } from "react";
import award from "/public/Award.svg";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 26) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <div className="bg-BackgroundColor pt-20 pb-10">
      <div className="max-w-max-width mx-auto">
        <div>
          <img src={award} alt="Award" />
          <p>{count}+</p>
          <p>Awards won</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;

// import React, { useEffect, useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count < 25) {
//       const interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 20); // Increment every 200ms

//       return () => clearInterval(interval);
//     }
//   }, [count]);

//   return (
//     <div className="bg-BackgroundColor pt-20 pb-10">
//       <div className="max-w-max-width mx-auto">
//         <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//           <h1 className="text-2xl font-bold mb-4">Counter</h1>
//           <p className="text-4xl font-semibold text-blue-600">{count}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;
