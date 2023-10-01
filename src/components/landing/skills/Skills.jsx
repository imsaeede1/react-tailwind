import SingleResume from "./single-resume/SingleResume";

const Skills = () => {
  return (
    <div className="bg-blue-purple opacity-90 row-span-6">
      <div className="grid grid-cols-1 divide-y">
        <div className="text-purple-light text-start p-2 ">RESUME</div>
        <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
          <SingleResume
            isIcon={true}
            isProcessBar={false}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={true}
            isProcessBar={false}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={true}
            isProcessBar={false}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={true}
            isProcessBar={true}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={false}
            isProcessBar={true}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={false}
            isProcessBar={true}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
          <SingleResume
            isIcon={false}
            isProcessBar={true}
            country={"Switzerland"}
            city={"city"}
            dateNum={"OCT - 1998"}
            date={"DATE OF BIRTHDAY"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y mt-8">
        <div className="text-blue-100 text-start p-2 flex justify-between items-center">
          <span>SKILLS</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.833"
              height="9.833"
              viewBox="0 0 9.833 9.833"
            >
              <path
                id="Path_3684"
                data-name="Path 3684"
                d="M8.917,4a.615.615,0,0,1,.615.615V8.3h3.688a.615.615,0,1,1,0,1.229H9.531v3.688a.615.615,0,0,1-1.229,0V9.531H4.615a.615.615,0,0,1,0-1.229H8.3V4.615A.615.615,0,0,1,8.917,4Z"
                transform="translate(-4 -4)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y px-3 text-white text-start text-xs ">
          <div className="flex py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
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
            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center ">
                <span>CITY</span>
                <div className="flex">
                  <span className="mr-3">7.25</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.582"
                    height="15.536"
                    viewBox="0 0 3.582 15.536"
                  >
                    <path
                      id="three-dots-vertical"
                      d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
                      transform="translate(-6.5 -1.5)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-1 rounded-l-lg bg-blue-arghavan"
                    style={{
                      width: "45%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
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
            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center ">
                <span>CITY</span>
                <div className="flex">
                  <span className="mr-3">7.25</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.582"
                    height="15.536"
                    viewBox="0 0 3.582 15.536"
                  >
                    <path
                      id="three-dots-vertical"
                      d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
                      transform="translate(-6.5 -1.5)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-1 rounded-l-lg bg-blue-arghavan"
                    style={{
                      width: "45%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
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
            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center ">
                <span>CITY</span>
                <div className="flex">
                  <span className="mr-3">7.25</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.582"
                    height="15.536"
                    viewBox="0 0 3.582 15.536"
                  >
                    <path
                      id="three-dots-vertical"
                      d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
                      transform="translate(-6.5 -1.5)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-1 rounded-l-lg bg-blue-arghavan"
                    style={{
                      width: "45%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
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
            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center ">
                <span>CITY</span>
                <div className="flex">
                  <span className="mr-3">7.25</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.582"
                    height="15.536"
                    viewBox="0 0 3.582 15.536"
                  >
                    <path
                      id="three-dots-vertical"
                      d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
                      transform="translate(-6.5 -1.5)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-1 rounded-l-lg bg-blue-arghavan"
                    style={{
                      width: "45%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
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
            <div className="flex flex-col w-full justify-center">
              <div className="flex justify-between items-center ">
                <span>CITY</span>
                <div className="flex">
                  <span className="mr-3">7.25</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.582"
                    height="15.536"
                    viewBox="0 0 3.582 15.536"
                  >
                    <path
                      id="three-dots-vertical"
                      d="M10.082,15.243A1.791,1.791,0,1,1,8.291,13.45,1.792,1.792,0,0,1,10.082,15.243Zm0-5.975A1.791,1.791,0,1,1,8.291,7.475,1.792,1.792,0,0,1,10.082,9.268Zm0-5.975A1.791,1.791,0,1,1,8.291,1.5,1.792,1.792,0,0,1,10.082,3.293Z"
                      transform="translate(-6.5 -1.5)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-2">
                <div className="h-1 w-full rounded bg-neutral-200 dark:bg-neutral-600">
                  <div
                    className="h-1 rounded-l-lg bg-blue-arghavan"
                    style={{
                      width: "45%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
