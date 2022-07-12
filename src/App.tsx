import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { store, persistor } from "@/store";
import Router from "@/routes";

const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zhCN}>
          <Router />
        </ConfigProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
