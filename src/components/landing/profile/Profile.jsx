const Profile = () => {
  return (
    <div className="bg-blue-purple opacity-90 row-span-6 h-[calc(100vh)] max-h-screen">
      <div className="grid grid-cols-1 divide-y">
        <div className="text-purple-light text-start p-2">PROFILE</div>
        <div className="grid grid-cols-1 divide-y px-3">
          <div className="flex flex-col justify-center items-center py-4">
            <div className="w-11/12 h-96 bg-purple-light rounded "></div>
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
            <span className="text-md font-semibold text-blue-arghavan">
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
  );
};

export default Profile;
