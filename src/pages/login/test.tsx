import React, { useRef, useCallback } from "react";

const Test = () => {
  const cb = useCallback((a, b) => {
    console.log(a, b);
  }, []);

  cb(1, 2);
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);

  console.log(9);
  console.log(10);
  console.log(11);

  console.log(12);

  console.log(13);

  return <div>test</div>;
};

export default Test;
