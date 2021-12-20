import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actions from "@/store/actions";
import { StoreState } from "@/store/state";
import { RebaseI } from "@/pages/git-practice";

interface IProps {
  storeData: StoreState;
}

const Login: React.FC<IProps> = (props) => {
  const [state, setState] = useState<number>(0);

  console.log(1);
  console.log(2);

  return (
    <div>
      <div>{state}</div>
      <Button onClick={() => setState(Math.random())}>按钮</Button>
      <RebaseI />
    </div>
  );
};

export default connect((state) => state, actions)(Login);
