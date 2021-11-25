import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actions from "@/store/actions";
import { StoreState } from "@/store/state";
import Test from "./test";

interface IProps {
  storeData: StoreState;
}

const Login: React.FC<IProps> = (props) => {
  const [state, setState] = useState<number>(0);

  return (
    <div>
      <div>{state}</div>
      <Test />
      <Button onClick={() => setState(Math.random())}>按钮</Button>
    </div>
  );
};

export default connect((state) => state, actions)(Login);
