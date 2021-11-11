import React from "react";
import { connect } from "react-redux";
import * as actions from "@/store/actions";
import { StoreState } from "@/store/state";

interface IProps {
  storeData: StoreState;
}

const Login: React.FC<IProps> = ({ storeData, ...props }) => {
  return <div>login</div>;
};

export default connect((state) => state, actions)(Login);
