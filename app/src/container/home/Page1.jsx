/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import tabla64 from "../../assets/pngs/tabla2.png";

const Page1 = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-3  h-screen p-4 ">
        <div className="  grid place-content-center">
          <img className=" w-[120px]" src={tabla64} />
        </div>

        <div className="  rounded-3xl grid place-content-center col-span-2 ">
          hello2
        </div>
      </div>
    </>
  );
};

export default Page1;
