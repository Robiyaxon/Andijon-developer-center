import React from "react";
import { SingleHeader1 } from "./SingleHeader1";
import { MainSingleProject1 } from "./MainSingleProject1";
// import MobileNav1 from "./../mobilnav/MobileNav1";
const SingleProject1 = (props) => {
  debugger
  return (
    <>
      <SingleHeader1 name={props.name} />
      <MainSingleProject1 name={props.name} />
    </>
  );
};
export default SingleProject1;
