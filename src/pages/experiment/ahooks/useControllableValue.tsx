import React from "react";
import { useControllableValue } from "ahooks";
import { Switch } from "antd";

interface ISonProps {
  checked: boolean;
  onChange: Function;
}

const Son: React.FC<ISonProps> = (props) => {
  const [checked, setChecked] = useControllableValue(props);

  return (
    <div>
      <h3>son useControllableValue</h3>
      <Switch checked={checked} onChange={(v) => setChecked(v)} />
    </div>
  );
};

const Father: React.FC = () => {
  const [state, setState] = React.useState(false);

  console.log("state", state);

  return (
    <div>
      <h1>useControllableValue</h1>
      <Son checked={state} onChange={setState} />
    </div>
  );
};

export default Father;
