import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    //클린업, 정리함수
    return () => { 
      console.log("unmount");
    };
  },[])
  return <div>짝수입니당.</div>;
};

export default Even;
