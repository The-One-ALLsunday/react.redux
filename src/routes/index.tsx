import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "@/pages/login";
import Layout from "@/layout";

interface IProps {
  token?: string;
  role: string;
  getUserInfo: (token: string) => Promise<string>;
}

const Router: React.FC = (props) => {
  const { token, role, getUserInfo } = props as IProps;

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          render={() => {
            if (!token) {
              return <Redirect to="/login" />;
            } else {
              if (role) {
                return <Layout />;
              } else {
                getUserInfo(token).then(() => <Layout />);
              }
            }
          }}
        />
      </Switch>
    </HashRouter>
  );
};

export default Router;
