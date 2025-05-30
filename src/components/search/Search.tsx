// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";

// const Search = ({ fromList, destination, checkin, checkout }) => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const [searchTerm, setSearchTerm] = useState({
//     destination: destination || "Puglia",
//     checkin: checkin,
//     checkout: checkout,
//   });

//   const [allowSearch, setAllowSearch] = useState(true);

//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     const state = { ...searchTerm, [name]: value };

//     if (
//       new Date(state.checkin).getTime() > new Date(state.checkout).getTime()
//     ) {
//       setAllowSearch(false);
//     } else {
//       setAllowSearch(true);
//     }
//     setSearchTerm(state);
//   };

//   function doSearch() { // event
//     const params = new URLSearchParams(searchParams);

//     params.set("destination", searchTerm?.destination || "all");
//     if (searchTerm?.checkin && searchTerm?.checkout) {
//       params.set("checkin", searchTerm?.checkin);
//       params.set("checkout", searchTerm?.checkout);
//     }

//     if (pathname.includes("hotels")) {
//       replace(${pathname}?${params.toString()});
//     } else {
//       replace(${pathname}hotels?${params.toString()});
//     }
//   }

//   return (
//     <>
//       <div className="lg:max-h-[250px] mt-6">
//         <div id="searchParams" className={fromList && "!shadow-none"}>
//           <div>
//             <span>Destination</span>
//             <h4 className="mt-2">
//               <select
//                 onChange={handleInputs}
//                 defaultValue={searchTerm.destination}
//                 name="destination"
//                 id="destination"
//               >
//                 <option value="Puglia">Puglia</option>
//                 <option value="Catania">Catania</option>
//                 <option value="Palermo">Palermo</option>
//                 <option value="Frejus">Frejus</option>
//                 <option value="Paris">Paris</option>
//               </select>
//             </h4>
//           </div>

//           <div>
//             <span>Check in</span>
//             <h4 className="mt-2">
//               <input
//                 onChange={handleInputs}
//                 type="date"
//                 name="checkin"
//                 id="checkin"
//                 value={searchTerm.checkin}
//               />
//             </h4>
//           </div>

//           <div>
//             <span>Checkout</span>
//             <h4 className="mt-2">
//               <input
//                 onChange={handleInputs}
//                 type="date"
//                 name="checkout"
//                 id="checkout"
//                 value={searchTerm.checkout}
//               />
//             </h4>
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={doSearch}
//         disabled={!allowSearch}
//         className="search-btn !rounded-[4px]"
//       >
//         🔍️ {fromList ? "Modify Search" : "Search"}
//       </button>
//     </>
//   );
// };

// export default Search;