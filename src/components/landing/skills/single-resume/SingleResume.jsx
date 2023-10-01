const SingleResume = ({
  isIcon,
  isProcessBar,
  country,
  city,
  dateNum,
  date,
}) => {
  return (
    <div className="grid grid-cols-2 divide-x py-2 relative ">
      <div>
        {" "}
        <div className="flex items-center">
          {isIcon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="25"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              0{" "}
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.054688 6.183594 L 27.460938 6.183594 L 27.460938 22.875 L 2.054688 22.875 Z M 2.054688 6.183594 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#id1)">
                <path
                  fill="rgb(91.369629%, 29.40979%, 20.779419%)"
                  d="M 2.066406 9.3125 C 2.066406 7.585938 3.484375 6.183594 5.242188 6.183594 L 24.273438 6.183594 C 26.03125 6.183594 27.453125 7.585938 27.453125 9.3125 L 27.453125 19.746094 C 27.453125 21.476562 26.03125 22.875 24.273438 22.875 L 5.242188 22.875 C 3.488281 22.875 2.066406 21.476562 2.066406 19.746094 Z M 2.066406 9.3125 "
                  fill-opacity="1"
                  fill-rule="evenodd"
                />
              </g>
              <path
                fill="rgb(100%, 100%, 100%)"
                d="M 13.171875 9.835938 L 16.34375 9.835938 L 16.34375 19.226562 L 13.171875 19.226562 Z M 13.171875 9.835938 "
                fill-opacity="1"
                fill-rule="evenodd"
              />
              <path
                fill="rgb(100%, 100%, 100%)"
                d="M 10 12.964844 L 19.519531 12.964844 L 19.519531 16.09375 L 10 16.09375 Z M 10 12.964844 "
                fill-opacity="1"
                fill-rule="evenodd"
              />
            </svg>
          )}
          <span className="ml-1 font-semibold">{country}</span>
        </div>
        <span>{city}</span>
      </div>
      <div className="pl-3 flex flex-col justify-center">
        <span className=" font-semibold">{dateNum}</span>
        <span className="">{date}</span>
        {isProcessBar && (
          <div
            className="h-1 rounded bg-neutral-200 dark:bg-neutral-600"
            style={{
              position: "absolute",
              bottom: "-1px",
              zIndex: "333333",
              width: "133px",
              right: "-2px",
            }}
          >
            <div
              className="h-1 rounded-l-lg bg-blue-arghavan"
              style={{
                width: "45%",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleResume;
