import React from "react";
import { useControllableValue } from "ahooks";
import { Form as AntdForm, Input, Switch, Button } from "antd";

const MInput: React.FC = (props) => {
  const [value] = useControllableValue(props);

  return <Switch checked={value} />;
};

const Form: React.FC = () => {
  const [form] = AntdForm.useForm();

  const [value, onChange] = React.useState<boolean>(false);

  React.useEffect(() => {
    form.setFieldsValue({
      ffff: value,
    });
  }, [value, form]);

  return (
    <>
      <AntdForm form={form}>
        <AntdForm.Item name="test" label="test">
          <Input value="slfjdslfjkls" />
        </AntdForm.Item>
        <Button onClick={() => onChange(!value)}>button</Button>
        <AntdForm.Item name="ffff" label="fff">
          <MInput />
        </AntdForm.Item>
      </AntdForm>
    </>
  );
};

export default Form;
