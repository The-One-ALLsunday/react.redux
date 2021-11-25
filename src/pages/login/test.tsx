import React, { useRef, useCallback } from "react";

const Test = () => {
  const cb = useCallback((a, b) => {
    console.log(a, b);
  }, []);

  cb(1, 2);

  return <div>test</div>;
};

export default Test;
