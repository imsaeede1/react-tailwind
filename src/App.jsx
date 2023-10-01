import "./App.css";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;

{
  /* <div className="grid grid-cols-4 gap-3 grid-rows-10 bg-slate-300">
<div className="bg-blue-900 col-span-4 row-span-3 px-2 flex justify-between items-center text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.614"
    height="19.999"
    viewBox="0 0 24.614 19.999"
  >
    <path
      id="layers"
      d="M12.669,1.591a.769.769,0,0,0-.723,0L.408,7.744a.769.769,0,0,0,0,1.357l4.5,2.4-4.5,2.4a.769.769,0,0,0,0,1.357l11.538,6.154a.769.769,0,0,0,.723,0l11.538-6.154a.769.769,0,0,0,0-1.357l-4.494-2.4,4.5-2.4a.769.769,0,0,0,0-1.357Zm5.408,10.782,4.135,2.2-9.9,5.282L2.4,14.577l4.135-2.2,5.408,2.883a.769.769,0,0,0,.723,0ZM12.308,13.7,2.4,8.423l9.9-5.282,9.9,5.282Z"
      transform="translate(0 -1.5)"
      fill="#fff"
    />
  </svg>
  <span>KAYLAY GUNNER</span>
  <div className="flex gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.065"
      height="16.067"
      viewBox="0 0 16.065 16.067"
    >
      <path
        id="Path_3675"
        data-name="Path 3675"
        d="M19.864,2.486a.69.69,0,0,1,0,.974L18.425,4.9,15.667,2.141,17.105.7a.69.69,0,0,1,.975,0l1.783,1.783ZM17.45,5.874,14.692,3.115l-9.4,9.4a.69.69,0,0,0-.167.27l-1.11,3.329a.345.345,0,0,0,.436.436l3.329-1.11a.69.69,0,0,0,.27-.166l9.4-9.4Z"
        transform="translate(-4 -0.5)"
        fill="#fff"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.999"
      height="20"
      viewBox="0 0 19.999 20"
    >
      <path
        id="Path_3702"
        data-name="Path 3702"
        d="M12.246,1.679a2.341,2.341,0,0,0-4.49,0l-.118.4a1.091,1.091,0,0,1-1.569.65l-.365-.2A2.341,2.341,0,0,0,2.529,5.7l.2.365a1.091,1.091,0,0,1-.65,1.569l-.4.118a2.341,2.341,0,0,0,0,4.49l.4.118a1.091,1.091,0,0,1,.65,1.569l-.2.365A2.341,2.341,0,0,0,5.7,17.472l.365-.2a1.091,1.091,0,0,1,1.569.65l.118.4a2.341,2.341,0,0,0,4.49,0l.118-.4a1.091,1.091,0,0,1,1.569-.65l.365.2A2.341,2.341,0,0,0,17.472,14.3l-.2-.365a1.091,1.091,0,0,1,.65-1.569l.4-.118a2.341,2.341,0,0,0,0-4.49l-.4-.118a1.091,1.091,0,0,1-.65-1.569l.2-.365A2.341,2.341,0,0,0,14.3,2.529l-.365.2a1.091,1.091,0,0,1-1.569-.65l-.118-.4Zm-3.291.354a1.091,1.091,0,0,1,2.093,0l.118.4a2.341,2.341,0,0,0,3.366,1.394l.364-.2a1.092,1.092,0,0,1,1.48,1.481l-.2.365a2.341,2.341,0,0,0,1.4,3.365l.4.118a1.091,1.091,0,0,1,0,2.093l-.4.118a2.341,2.341,0,0,0-1.394,3.366l.2.364a1.092,1.092,0,0,1-1.481,1.48l-.364-.2a2.341,2.341,0,0,0-3.366,1.4l-.118.4a1.091,1.091,0,0,1-2.093,0l-.118-.4a2.341,2.341,0,0,0-3.365-1.394l-.365.2a1.092,1.092,0,0,1-1.48-1.481l.2-.364a2.341,2.341,0,0,0-1.394-3.368l-.4-.118a1.091,1.091,0,0,1,0-2.093l.4-.118A2.341,2.341,0,0,0,3.825,5.471l-.2-.365a1.092,1.092,0,0,1,1.481-1.48l.365.2A2.341,2.341,0,0,0,8.837,2.431l.118-.4Z"
        transform="translate(-0.001 0)"
        fill="#fff"
      />
    </svg>
  </div>
</div>
<div className="bg-blue-900  row-span-6 h-[calc(100vh-10rem)] max-h-screen">
  <div className="grid grid-cols-1 divide-y">
    <div className="text-blue-100 text-start p-2">PROFILE</div>
    <div className="grid grid-cols-1 divide-y px-3">
      <div className="flex flex-col justify-center items-center py-4">
        <div className="w-11/12 h-96 bg-purple-200 rounded "></div>
        <div className="grid grid-cols-5 w-11/12 divide-x pt-3">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.498"
              height="19.999"
              viewBox="0 0 17.498 19.999"
            >
              <path
                id="bell"
                d="M9.749,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,9.749,20Zm0-17.6-1,.2a5,5,0,0,0-4,4.9,27.123,27.123,0,0,1-.574,4.677A16.168,16.168,0,0,1,3.347,15h12.8a16.245,16.245,0,0,1-.829-2.822A27.124,27.124,0,0,1,14.749,7.5a5,5,0,0,0-4-4.9l-1-.2ZM17.523,15a3.18,3.18,0,0,0,.975,1.25H1A3.18,3.18,0,0,0,1.975,15,22.133,22.133,0,0,0,3.5,7.5,6.252,6.252,0,0,1,8.505,1.374a1.25,1.25,0,1,1,2.487,0A6.252,6.252,0,0,1,16,7.5,22.133,22.133,0,0,0,17.523,15Z"
                transform="translate(-1 0.001)"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.332"
              height="19.999"
              viewBox="0 0 21.332 19.999"
            >
              <path
                id="shop-window"
                d="M3.96,1.467A1.333,1.333,0,0,1,4.973,1H16.359a1.333,1.333,0,0,1,1.013.467l3.478,4.058a2,2,0,0,1,.481,1.3v.34A3.167,3.167,0,0,1,15.666,9.11a3.167,3.167,0,0,1-5,0,3.167,3.167,0,0,1-5,0A3.167,3.167,0,0,1,0,7.166v-.34a2,2,0,0,1,.481-1.3l3.48-4.06Zm2.373,5.7a1.833,1.833,0,0,0,3.666,0,.667.667,0,1,1,1.333,0,1.833,1.833,0,0,0,3.666,0,.667.667,0,1,1,1.333,0,1.833,1.833,0,0,0,3.666,0v-.34a.667.667,0,0,0-.16-.433l-3.48-4.06H4.973l-3.48,4.06a.667.667,0,0,0-.16.433v.34A1.833,1.833,0,0,0,5,7.166a.667.667,0,1,1,1.333,0ZM2,11a.667.667,0,0,1,.667.667v8h16v-8a.667.667,0,1,1,1.333,0v8h.667a.667.667,0,0,1,0,1.333h-20a.667.667,0,0,1,0-1.333h.667v-8A.667.667,0,0,1,2,11Zm2.667.667a.667.667,0,0,1,.667.667V17H16V12.333a.667.667,0,1,1,1.333,0V17A1.333,1.333,0,0,1,16,18.332H5.333A1.333,1.333,0,0,1,4,17V12.333A.667.667,0,0,1,4.666,11.666Z"
                transform="translate(0 -1)"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.999"
              height="19.999"
              viewBox="0 0 19.999 19.999"
            >
              <path
                id="pie-chart"
                d="M9.375,1.272A8.75,8.75,0,0,0,3.387,15.729L9.375,9.741Zm1.25,0v8.1h8.1a8.751,8.751,0,0,0-8.1-8.1Zm8.1,9.352H10.258L4.271,16.612a8.75,8.75,0,0,0,14.456-5.987ZM0,10A10,10,0,1,1,10,20,10,10,0,0,1,0,10Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.869"
              height="19.999"
              viewBox="0 0 20.869 19.999"
            >
              <path
                id="chat-square_1_"
                data-name="chat-square (1)"
                d="M18.26,1.3a1.3,1.3,0,0,1,1.3,1.3V13.043a1.3,1.3,0,0,1-1.3,1.3H15a2.609,2.609,0,0,0-2.087,1.043l-2.478,3.3-2.478-3.3a2.609,2.609,0,0,0-2.087-1.043H2.609a1.3,1.3,0,0,1-1.3-1.3V2.609a1.3,1.3,0,0,1,1.3-1.3ZM2.609,0A2.609,2.609,0,0,0,0,2.609V13.043a2.609,2.609,0,0,0,2.609,2.609H5.869a1.3,1.3,0,0,1,1.043.522l2.478,3.3a1.3,1.3,0,0,0,2.087,0l2.478-3.3A1.3,1.3,0,0,1,15,15.652H18.26a2.609,2.609,0,0,0,2.609-2.609V2.609A2.609,2.609,0,0,0,18.26,0Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.999"
              height="19.999"
              viewBox="0 0 19.999 19.999"
            >
              <path
                id="grid-1x2"
                d="M7.5,1.25H1.25v17.5H7.5Zm11.249,0H12.5V7.5h6.25Zm0,11.249v6.25H12.5V12.5ZM0,1.25A1.25,1.25,0,0,1,1.25,0H7.5A1.25,1.25,0,0,1,8.75,1.25v17.5A1.25,1.25,0,0,1,7.5,20H1.25A1.25,1.25,0,0,1,0,18.749Zm11.249,0A1.25,1.25,0,0,1,12.5,0h6.25A1.25,1.25,0,0,1,20,1.25V7.5a1.25,1.25,0,0,1-1.25,1.25H12.5a1.25,1.25,0,0,1-1.25-1.25Zm1.25,10a1.25,1.25,0,0,0-1.25,1.25v6.25A1.25,1.25,0,0,0,12.5,20h6.25A1.25,1.25,0,0,0,20,18.749V12.5a1.25,1.25,0,0,0-1.25-1.25Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center py-3">
        <span className="text-md font-semibold text-blue-200">
          BIOGRAPHY
        </span>
        <span className="text-xs  text-white">USERNAME</span>
      </div>
      <div className="text-xs text-white py-3">
        Welcome to Porsche! Find information on all Porsche vehicles,
        services, dealers in your area and everything about the Porsche
        brand right here.
      </div>
      <div></div>
    </div>
  </div>
</div>
<div className="bg-blue-900 row-span-3 flex justify-between flex-col divide-y ">
  {/* #080050 */
}
//   <div className="grid grid-cols-1 divide-y">
//     <div className="text-blue-100 text-start p-2 ">NEW PROJECT</div>
//     <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
//       <div className="grid grid-cols-2 divide-x py-3  ">
//         <div>COUNTRY</div>
//         <div className="pl-3">MAXIMUM BUDGET</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>CITY</div>
//         <div className="pl-3">MINIMUM BUDGET</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>NATIVE LANGUAGE</div>
//         <div className="pl-3">DEADLINE</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>DEADLINE</div>
//         <div className="pl-3">ATTACHMENT FILE</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>MINIMUM EXPERIENCE</div>
//         <div className="pl-3">PROFILE RATING</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>FIELD OF ACTIVITY</div>
//         <div className="pl-3">NATIVE LANGUAGE</div>
//       </div>
//       <div className="py-3">FREELANCER SKILLS</div>
//       <div className="py-2">DISCRIPTIONS...</div>
//     </div>
//   </div>
//   <div className="text-white py-3 text-xs font-semibold">
//     CREATE PROJECT
//   </div>
// </div>
// <div className="bg-blue-900 row-span-3 flex justify-between flex-col divide-y ">
//   {/* #080050 */}
//   <div className="grid grid-cols-1 divide-y">
//     <div className="text-blue-100 text-start p-2 ">NEW PROJECT</div>
//     <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
//       <div className="grid grid-cols-2 divide-x py-3  ">
//         <div>COUNTRY</div>
//         <div className="pl-3">MAXIMUM BUDGET</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>CITY</div>
//         <div className="pl-3">MINIMUM BUDGET</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>NATIVE LANGUAGE</div>
//         <div className="pl-3">DEADLINE</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>DEADLINE</div>
//         <div className="pl-3">ATTACHMENT FILE</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>MINIMUM EXPERIENCE</div>
//         <div className="pl-3">PROFILE RATING</div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-3">
//         <div>FIELD OF ACTIVITY</div>
//         <div className="pl-3">NATIVE LANGUAGE</div>
//       </div>
//       <div className="py-3">FREELANCER SKILLS</div>
//       <div className="py-2">DISCRIPTIONS...</div>
//     </div>
//   </div>
//   <div className="text-white py-3 text-xs font-semibold">
//     CREATE PROJECT
//   </div>
// </div>
// <div className="bg-blue-900 row-span-6">
//   <div className="grid grid-cols-1 divide-y">
//     <div className="text-blue-100 text-start p-2 ">RESUME</div>
//     <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
//       <div className="grid grid-cols-2 divide-x py-2  ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="20"
//               zoomAndPan="magnify"
//               viewBox="0 0 30 30.000001"
//               height="20"
//               preserveAspectRatio="xMidYMid meet"
//               version="1.0"
//             >
//               <defs>
//                 <clipPath id="id1">
//                   <path
//                     d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                     clip-rule="nonzero"
//                   />
//                 </clipPath>
//               </defs>
//               <g clip-path="url(#id1)">
//                 <path
//                   fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//                   d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//                   fill-opacity="1"
//                   fill-rule="evenodd"
//                 />
//               </g>
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//             </svg>
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           {" "}
//           {/* <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600"> */}
//           {/* <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{ width: "45%" }}
//             ></div> */}
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2  ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="20"
//               zoomAndPan="magnify"
//               viewBox="0 0 30 30.000001"
//               height="20"
//               preserveAspectRatio="xMidYMid meet"
//               version="1.0"
//             >
//               <defs>
//                 <clipPath id="id1">
//                   <path
//                     d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                     clip-rule="nonzero"
//                   />
//                 </clipPath>
//               </defs>
//               <g clip-path="url(#id1)">
//                 <path
//                   fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//                   d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//                   fill-opacity="1"
//                   fill-rule="evenodd"
//                 />
//               </g>
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//             </svg>
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           {" "}
//           {/* <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600"> */}
//           {/* <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{ width: "45%" }}
//             ></div> */}
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2  ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="20"
//               zoomAndPan="magnify"
//               viewBox="0 0 30 30.000001"
//               height="20"
//               preserveAspectRatio="xMidYMid meet"
//               version="1.0"
//             >
//               <defs>
//                 <clipPath id="id1">
//                   <path
//                     d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                     clip-rule="nonzero"
//                   />
//                 </clipPath>
//               </defs>
//               <g clip-path="url(#id1)">
//                 <path
//                   fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//                   d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//                   fill-opacity="1"
//                   fill-rule="evenodd"
//                 />
//               </g>
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//             </svg>
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           {" "}
//           {/* <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600"> */}
//           {/* <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{ width: "45%" }}
//             ></div> */}
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2 relative ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           <div
//             className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
//             style={{
//               position: "absolute",
//               bottom: "-1px",
//               zIndex: "333333",
//               width: "133px",
//               right: "-2px",
//             }}
//           >
//             <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{
//                 width: "45%",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2 relative ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           <div
//             className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
//             style={{
//               position: "absolute",
//               bottom: "-1px",
//               zIndex: "333333",
//               width: "133px",
//               right: "-2px",
//             }}
//           >
//             <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{
//                 width: "45%",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2 relative ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               width="20"
//               zoomAndPan="magnify"
//               viewBox="0 0 30 30.000001"
//               height="25"
//               preserveAspectRatio="xMidYMid meet"
//               version="1.0"
//             >
//               0{" "}
//               <defs>
//                 <clipPath id="id1">
//                   <path
//                     d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                     clip-rule="nonzero"
//                   />
//                 </clipPath>
//               </defs>
//               <g clip-path="url(#id1)">
//                 <path
//                   fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//                   d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//                   fill-opacity="1"
//                   fill-rule="evenodd"
//                 />
//               </g>
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//               <path
//                 fill="rgb(100%, 100%, 100%)"
//                 d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//                 fill-opacity="1"
//                 fill-rule="evenodd"
//               />
//             </svg>
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           <div
//             className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
//             style={{
//               position: "absolute",
//               bottom: "-1px",
//               zIndex: "333333",
//               width: "133px",
//               right: "-2px",
//             }}
//           >
//             <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{
//                 width: "45%",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2 relative ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           <div
//             className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
//             style={{
//               position: "absolute",
//               bottom: "-1px",
//               zIndex: "333333",
//               width: "133px",
//               right: "-2px",
//             }}
//           >
//             <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{
//                 width: "45%",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 divide-x py-2 relative ">
//         <div>
//           {" "}
//           <div className="flex items-center">
//             <span className="ml-1 font-semibold">Switzerland</span>
//           </div>
//           <span>COUNTRY</span>
//         </div>
//         <div className="pl-3 flex flex-col justify-center">
//           <span className=" font-semibold">OCT - 1998</span>
//           <span className="">DATE OF BIRTHDAY</span>
//           <div
//             className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
//             style={{
//               position: "absolute",
//               bottom: "-1px",
//               zIndex: "333333",
//               width: "133px",
//               right: "-2px",
//             }}
//           >
//             <div
//               className="h-1 rounded-l-lg bg-blue-400"
//               style={{
//                 width: "45%",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="grid grid-cols-1 divide-y mt-8">
//     <div className="text-blue-100 text-start p-2 flex justify-between items-center">
//       <span>SKILLS</span>
//       <div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="9.833"
//           height="9.833"
//           viewBox="0 0 9.833 9.833"
//         >
//           <path
//             id="Path_3684"
//             data-name="Path 3684"
//             d="M8.917,4a.615.615,0,0,1,.615.615V8.3h3.688a.615.615,0,1,1,0,1.229H9.531v3.688a.615.615,0,0,1-1.229,0V9.531H4.615a.615.615,0,0,1,0-1.229H8.3V4.615A.615.615,0,0,1,8.917,4Z"
//             transform="translate(-4 -4)"
//             fill="#fff"
//           />
//         </svg>
//       </div>
//     </div>
//     <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
//       <div className="flex py-2 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           width="40"
//           zoomAndPan="magnify"
//           viewBox="0 0 30 30.000001"
//           height="30"
//           preserveAspectRatio="xMidYMid meet"
//           version="1.0"
//         >
//           <defs>
//             <clipPath id="id1">
//               <path
//                 d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                 clip-rule="nonzero"
//               />
//             </clipPath>
//           </defs>
//           <g clip-path="url(#id1)">
//             <path
//               fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//               d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//               fill-opacity="1"
//               fill-rule="evenodd"
//             />
//           </g>
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//         </svg>
//         <div className="flex flex-col w-full justify-center">
//           <div className="flex justify-between items-center ">
//             <span>CITY</span>
//             <div className="flex">
//               <span className="mr-3">7.25</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3.582"
//                 height="15.536"
//                 viewBox="0 0 3.582 15.536"
//               >
//                 <path
//                   id="three-dots-vertical"
//                   d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
//                   transform="translate(-6.5 -1.5)"
//                   fill="#fff"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-2">
//             <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
//               <div
//                 className="h-1 rounded-l-lg bg-blue-400"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex py-2 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           width="40"
//           zoomAndPan="magnify"
//           viewBox="0 0 30 30.000001"
//           height="30"
//           preserveAspectRatio="xMidYMid meet"
//           version="1.0"
//         >
//           <defs>
//             <clipPath id="id1">
//               <path
//                 d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                 clip-rule="nonzero"
//               />
//             </clipPath>
//           </defs>
//           <g clip-path="url(#id1)">
//             <path
//               fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//               d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//               fill-opacity="1"
//               fill-rule="evenodd"
//             />
//           </g>
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//         </svg>
//         <div className="flex flex-col w-full justify-center">
//           <div className="flex justify-between items-center ">
//             <span>CITY</span>
//             <div className="flex">
//               <span className="mr-3">7.25</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3.582"
//                 height="15.536"
//                 viewBox="0 0 3.582 15.536"
//               >
//                 <path
//                   id="three-dots-vertical"
//                   d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
//                   transform="translate(-6.5 -1.5)"
//                   fill="#fff"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-2">
//             <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
//               <div
//                 className="h-1 rounded-l-lg bg-blue-400"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex py-2 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           width="40"
//           zoomAndPan="magnify"
//           viewBox="0 0 30 30.000001"
//           height="30"
//           preserveAspectRatio="xMidYMid meet"
//           version="1.0"
//         >
//           <defs>
//             <clipPath id="id1">
//               <path
//                 d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                 clip-rule="nonzero"
//               />
//             </clipPath>
//           </defs>
//           <g clip-path="url(#id1)">
//             <path
//               fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//               d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//               fill-opacity="1"
//               fill-rule="evenodd"
//             />
//           </g>
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//         </svg>
//         <div className="flex flex-col w-full justify-center">
//           <div className="flex justify-between items-center ">
//             <span>CITY</span>
//             <div className="flex">
//               <span className="mr-3">7.25</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3.582"
//                 height="15.536"
//                 viewBox="0 0 3.582 15.536"
//               >
//                 <path
//                   id="three-dots-vertical"
//                   d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
//                   transform="translate(-6.5 -1.5)"
//                   fill="#fff"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-2">
//             <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
//               <div
//                 className="h-1 rounded-l-lg bg-blue-400"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex py-2 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           width="40"
//           zoomAndPan="magnify"
//           viewBox="0 0 30 30.000001"
//           height="30"
//           preserveAspectRatio="xMidYMid meet"
//           version="1.0"
//         >
//           <defs>
//             <clipPath id="id1">
//               <path
//                 d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                 clip-rule="nonzero"
//               />
//             </clipPath>
//           </defs>
//           <g clip-path="url(#id1)">
//             <path
//               fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//               d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//               fill-opacity="1"
//               fill-rule="evenodd"
//             />
//           </g>
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//         </svg>
//         <div className="flex flex-col w-full justify-center">
//           <div className="flex justify-between items-center ">
//             <span>CITY</span>
//             <div className="flex">
//               <span className="mr-3">7.25</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3.582"
//                 height="15.536"
//                 viewBox="0 0 3.582 15.536"
//               >
//                 <path
//                   id="three-dots-vertical"
//                   d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
//                   transform="translate(-6.5 -1.5)"
//                   fill="#fff"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-2">
//             <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
//               <div
//                 className="h-1 rounded-l-lg bg-blue-400"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex py-2 ">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           xmlns:xlink="http://www.w3.org/1999/xlink"
//           width="40"
//           zoomAndPan="magnify"
//           viewBox="0 0 30 30.000001"
//           height="30"
//           preserveAspectRatio="xMidYMid meet"
//           version="1.0"
//         >
//           <defs>
//             <clipPath id="id1">
//               <path
//                 d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
//                 clip-rule="nonzero"
//               />
//             </clipPath>
//           </defs>
//           <g clip-path="url(#id1)">
//             <path
//               fill="rgb(91.369629%, 29.40979%, 20.779419%)"
//               d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
//               fill-opacity="1"
//               fill-rule="evenodd"
//             />
//           </g>
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//           <path
//             fill="rgb(100%, 100%, 100%)"
//             d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
//             fill-opacity="1"
//             fill-rule="evenodd"
//           />
//         </svg>
//         <div className="flex flex-col w-full justify-center">
//           <div className="flex justify-between items-center ">
//             <span>CITY</span>
//             <div className="flex">
//               <span className="mr-3">7.25</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="3.582"
//                 height="15.536"
//                 viewBox="0 0 3.582 15.536"
//               >
//                 <path
//                   id="three-dots-vertical"
//                   d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
//                   transform="translate(-6.5 -1.5)"
//                   fill="#fff"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="mt-2">
//             <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
//               <div
//                 className="h-1 rounded-l-lg bg-blue-400"
//                 style={{
//                   width: "45%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="bg-blue-900 row-span-3">
//   {" "}
//   <div className="grid grid-cols-1 divide-y">
//     <div className="text-blue-100 text-start p-2 ">RESUME</div>
//     <div></div>
//   </div>
// </div>
// <div className="bg-blue-900 row-span-3">
//   {" "}
//   <div className="grid grid-cols-1 divide-y">
//     <div className="text-blue-100 text-start p-2 ">RESUME</div>
//     <div></div>
//   </div>
// </div>
// </div>
