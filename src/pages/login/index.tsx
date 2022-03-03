import React from "react";
import { connect } from "react-redux";
import * as actions from "@/store/actions";
import { StoreState } from "@/store/state";
import { Father } from "../experiment/ahooks";
import { Form } from "../experiment/antd/index";
import style from "./style.module.less";
interface IProps {
  storeData: StoreState;
}

const Login: React.FC<IProps> = (props) => {
  return (
    <div>
      <h1 className={style.login}>Login Page</h1>
      {/* <Father /> */}
      <Form />
    </div>
  );
};

export default connect((state) => state, actions)(Login);
