// import React, { useState, useEffect } from "react";

// const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const App: React.FC = () => {
//   const [month, setMonth] = useState<string>("");
//   const [calendar, setCalendar] = useState<{ [key: string]: { text: string; checked: boolean } }>({});
//   const [priorities, setPriorities] = useState<string>("");
//   const [notes, setNotes] = useState<string>("");

//   useEffect(() => {
//     const savedMonth = localStorage.getItem("month");
//     const savedCalendar = localStorage.getItem("calendar");
//     const savedPriorities = localStorage.getItem("priorities");
//     const savedNotes = localStorage.getItem("notes");

//     if (savedMonth) setMonth(savedMonth);
//     if (savedCalendar) setCalendar(JSON.parse(savedCalendar)); 
//     if (savedPriorities) setPriorities(savedPriorities);
//     if (savedNotes) setNotes(savedNotes);
//   }, []);

//   useEffect(() => {
//     if (month) localStorage.setItem("month", month);
//     if (calendar && Object.keys(calendar).length) localStorage.setItem("calendar", JSON.stringify(calendar));
//     if (priorities) localStorage.setItem("priorities", priorities);
//     if (notes) localStorage.setItem("notes", notes);
//   }, [month, calendar, priorities, notes]);
  
//   const handleCalendarChange = (day: string, value: string) => {
//     setCalendar((prev) => ({
//       ...prev,
//       [day]: { ...prev[day], text: value || "", checked: prev[day]?.checked || false },
//     }));
//   };

//   const handleCheckboxChange = (day: string) => {
//     setCalendar((prev) => ({
//       ...prev,
//       [day]: { ...prev[day], checked: !prev[day]?.checked, text: prev[day]?.text || "" },
//     }));
//   };

//   const handleClearAll = () => {
//     setMonth(""); 
//     setCalendar({}); 
//     setPriorities(""); 
//     setNotes(""); 
//     localStorage.clear(); 
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-[#F9FAFB] shadow-lg rounded-lg">
//       <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
//         <h1 className="text-4xl font-[cursive] text-gray-700">monthly planner</h1>
//         <input
//           id="month-input"
//           name="month"
//           type="text"
//           className="p-2 border rounded-md text-lg bg-[#E5E7EB] w-full sm:w-auto"
//           placeholder="MONTH"
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//         />
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
//         {daysOfWeek.map((day) => (
//           <div key={day} className="flex flex-col items-center">
//             <h3 className="text-lg font-semibold text-gray-600">{day}</h3>
//             {[...Array(5)].map((_, index) => {
//               const dayKey = `${day}-${index + 1}`;
//               return (
//                 <div key={dayKey} className="relative w-full sm:w-24 h-20 bg-[#D1D5DB] p-2 border rounded-md mt-2">
//                   <input
//                     id={`checkbox-${dayKey}`}
//                     name={`checkbox-${dayKey}`}
//                     type="checkbox"
//                     className="absolute top-1 right-1 w-4 h-4 cursor-pointer"
//                     checked={calendar[dayKey]?.checked || false}
//                     onChange={() => handleCheckboxChange(dayKey)}
//                   />
//                   <textarea
//                     id={`text-${dayKey}`}
//                     name={`text-${dayKey}`}
//                     className="w-full h-full bg-transparent resize-none focus:outline-none"
//                     placeholder=""
//                     value={calendar[dayKey]?.text || ""}
//                     onChange={(e) => handleCalendarChange(dayKey, e.target.value)}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         <div className="bg-[#F3F4F6] p-4 rounded-lg">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">TOP PRIORITIES</h2>
//           <textarea
//             id="priorities-textarea"
//             name="priorities"
//             className="w-full p-3 border rounded-md bg-white resize-none h-24"
//             placeholder="Write your priorities here..."
//             value={priorities}
//             onChange={(e) => setPriorities(e.target.value)}
//           />
//         </div>
//         <div className="bg-[#F3F4F6] p-4 rounded-lg">
//           <h2 className="text-2xl font-semibold text-gray-700">NOTES</h2>
//           <textarea
//             id="notes-textarea"
//             name="notes"
//             className="w-full mt-2 p-3 border rounded-md text-lg h-24 resize-none bg-white"
//             placeholder="Write your notes here..."
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Clear All Button */}
//       <div className="flex justify-center mt-6">
//         <button
//           className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
//           onClick={handleClearAll}
//         >
//           Clear All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const App: React.FC = () => {
  const [month, setMonth] = useState<string>("");
  const [calendar, setCalendar] = useState<{ [key: string]: { text: string; checked: boolean } }>({});
  const [priorities, setPriorities] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  useEffect(() => {
    const savedMonth = localStorage.getItem("month");
    const savedCalendar = localStorage.getItem("calendar");
    const savedPriorities = localStorage.getItem("priorities");
    const savedNotes = localStorage.getItem("notes");

    if (savedMonth) setMonth(savedMonth);
    if (savedCalendar) setCalendar(JSON.parse(savedCalendar)); 
    if (savedPriorities) setPriorities(savedPriorities);
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    if (month) localStorage.setItem("month", month);
    if (calendar && Object.keys(calendar).length) localStorage.setItem("calendar", JSON.stringify(calendar));
    if (priorities) localStorage.setItem("priorities", priorities);
    if (notes) localStorage.setItem("notes", notes);
  }, [month, calendar, priorities, notes]);
  
  const handleCalendarChange = (day: string, value: string) => {
    setCalendar((prev) => ({
      ...prev,
      [day]: { ...prev[day], text: value || "", checked: prev[day]?.checked || false },
    }));
  };

  const handleCheckboxChange = (day: string) => {
    setCalendar((prev) => ({
      ...prev,
      [day]: { ...prev[day], checked: !prev[day]?.checked, text: prev[day]?.text || "" },
    }));
  };

  const handleClearAll = () => {
    setMonth(""); 
    setCalendar({}); 
    setPriorities(""); 
    setNotes(""); 
    localStorage.clear(); 
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-[#F9FAFB] shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-4xl font-[cursive] text-gray-700">monthly planner</h1>
        <input
          id="month-input"
          name="month"
          type="text"
          className="p-2 border rounded-md text-sm sm:text-lg bg-[#E5E7EB] w-full sm:w-auto mt-2 sm:mt-0"
          placeholder="MONTH"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      {/* Days of the Week - 3 Columns on Small Screens */}
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-3">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-600">{day}</h3>
            {[...Array(5)].map((_, index) => {
              const dayKey = `${day}-${index + 1}`;
              return (
                <div key={dayKey} className="relative w-full sm:w-24 h-20 bg-[#D1D5DB] p-2 border rounded-md mt-2">
                  <input
                    id={`checkbox-${dayKey}`}
                    name={`checkbox-${dayKey}`}
                    type="checkbox"
                    className="absolute top-1 right-1 w-4 h-4 cursor-pointer"
                    checked={calendar[dayKey]?.checked || false}
                    onChange={() => handleCheckboxChange(dayKey)}
                  />
                  <textarea
                    id={`text-${dayKey}`}
                    name={`text-${dayKey}`}
                    className="w-full h-full bg-transparent resize-none focus:outline-none text-sm sm:text-base"
                    placeholder=""
                    value={calendar[dayKey]?.text || ""}
                    onChange={(e) => handleCalendarChange(dayKey, e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div><div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-[#F3F4F6] p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">TOP PRIORITIES</h2>
          <textarea
            id="priorities-textarea"
            name="priorities"
            className="w-full p-2 sm:p-3 border rounded-md bg-white resize-none h-24 text-sm sm:text-base"
            placeholder="Write your priorities here..."
            value={priorities}
            onChange={(e) => setPriorities(e.target.value)}
          />
        </div>
        <div className="bg-[#F3F4F6] p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">NOTES</h2>
          <textarea
            id="notes-textarea"
            name="notes"
            className="w-full mt-2 p-2 sm:p-3 border rounded-md text-sm sm:text-base h-24 resize-none bg-white"
            placeholder="Write your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      {/* Clear All Button */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none text-sm sm:text-base"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </div>
      );
};

export default App;