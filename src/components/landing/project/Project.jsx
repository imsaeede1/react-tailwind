const Project = () => {
  return (
    <div className="bg-blue-purple opacity-90 row-span-3 flex justify-between flex-col divide-y ">
      {/* #080050 */}
      <div className="grid grid-cols-1 divide-y">
        <div className="text-purple-light text-start p-2 ">NEW PROJECT</div>
        <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
          <div className="grid grid-cols-2 divide-x py-3  ">
            <div>COUNTRY</div>
            <div className="pl-3">MAXIMUM BUDGET</div>
          </div>
          <div className="grid grid-cols-2 divide-x py-3">
            <div>CITY</div>
            <div className="pl-3">MINIMUM BUDGET</div>
          </div>
          <div className="grid grid-cols-2 divide-x py-3">
            <div>NATIVE LANGUAGE</div>
            <div className="pl-3">DEADLINE</div>
          </div>
          <div className="grid grid-cols-2 divide-x py-3">
            <div>DEADLINE</div>
            <div className="pl-3">ATTACHMENT FILE</div>
          </div>
          <div className="grid grid-cols-2 divide-x py-3">
            <div>MINIMUM EXPERIENCE</div>
            <div className="pl-3">PROFILE RATING</div>
          </div>
          <div className="grid grid-cols-2 divide-x py-3">
            <div>FIELD OF ACTIVITY</div>
            <div className="pl-3">NATIVE LANGUAGE</div>
          </div>
          <div className="py-3">FREELANCER SKILLS</div>
          <div className="py-2">DISCRIPTIONS...</div>
        </div>
      </div>
      <div className="text-blue-arghavan py-3 text-xs font-semibold">
        CREATE PROJECT
      </div>
    </div>
  );
};

export default Project;
