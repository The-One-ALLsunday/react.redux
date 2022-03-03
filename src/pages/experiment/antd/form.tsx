import React from "react";
import { Form as AntdForm, Input, Switch } from "antd";

const Form: React.FC = () => {
  const [form] = AntdForm.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      check: true,
    });
  }, [form]);

  return (
    <AntdForm form={form} initialValues={{ input: "input" }}>
      <AntdForm.Item name="input" label="sfjfklds">
        <Input />
      </AntdForm.Item>
      <AntdForm.Item name="check" label="sfjfklds">
        <Switch checked={true} />
      </AntdForm.Item>
      <AntdForm.Item dependencies={["sfdjfs"]} label="lsfjddlksjf">
        {() => {
          console.log("ajflsfjdsf");
          return "123";
        }}
        {/* <Input /> */}
      </AntdForm.Item>
    </AntdForm>
  );
};

export default Form;
