import React, { useMemo } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "@/store/actions";
import Login from "@/pages/login";
import Layout from "@/layout";

interface IProps extends ReduxProps {}

const Router: React.FC<IProps> = (props) => {
  console.log("props", props);
  const { storeData } = props;
  const userInfo = useMemo(() => storeData?.userInfo, [storeData]);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          render={() => {
            if (!userInfo.token) {
              return <Redirect to="/login" />;
            } else {
              if (userInfo.role) {
                return <Layout />;
              }
              // getUserInfo(token).then(() => <Layout />);
            }
          }}
        />
      </Switch>
    </HashRouter>
  );
};
export default connect((state) => state, actions)(Router);
