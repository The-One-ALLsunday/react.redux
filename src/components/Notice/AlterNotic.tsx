import * as React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'antd';
import { AlertProps } from 'antd/lib/alert';
import './index.less';
export interface State {
  visible?: boolean;
  message?: React.ReactNode;
  description?: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
}

export interface Props extends Omit<AlertProps, 'message'> {
  message?: React.ReactNode;
  showField?: string;
}

export interface NoticeInstance {
  removeNotice: () => void;
  component: AlterNotic;
  notice: (args: Props) => void;
}

const defaultTitle = {
  warn: '警告信息',
  info: '提示信息',
  warning: '警告信息',
  error: '错误信息',
  success: '提示信息',
};

class AlterNotic extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: true,
      message: '提示信息',
      description: null,
      type: 'warning',
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }
  static newInstance: (
    properties: Props,
    callback: (instance: NoticeInstance) => void,
  ) => void;

  remove = () => {
    this.setState({ visible: false });
  };

  open = (args: Props = {}) => {
    let { description, showField = 'msg' } = args || {};
    if (Array.isArray(description)) {
      description = description
        .map(item => {
          if (Object.prototype.toString.call(item).slice(8, -1) === 'Object') {
            // @ts-ignore
            return item[showField];
          }
          return item;
        })
        .join(',');
    }
    this.setState({
      visible: true,
      message: args.message || (args.type && defaultTitle[args.type]),
      description: description,
      type: args.type,
    });
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handleUrlChange);
  }

  handleUrlChange = () => {
    this.setState({
      visible: false,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handleUrlChange);
  }

  render() {
    const { closable = true, ...rest } = this.props;
    const { visible, message, description, type } = this.state;
    return visible ? (
      <Alert
        {...rest}
        message={message}
        closable={closable}
        description={description}
        afterClose={this.handleUrlChange}
        type={type}
      />
    ) : null;
  }
}

AlterNotic.newInstance = function newNotificationInstance(
  properties,
  callback,
) {
  const { message = '提示信息', closable = true, ...props } = properties || {};
  let called = false;
  const div = document.createElement('div');
  if (![...div.classList].includes('el-notice')) {
    div.classList.add('el-notice');
  }
  document.getElementById('slave-container')?.insertBefore(
    div,
    // @ts-ignore
    document.getElementById('slave-container')?.firstElementChild,
  );
  function ref(notification: AlterNotic) {
    if (called) {
      return;
    }
    called = true;
    callback({
      removeNotice() {
        notification.remove();
      },
      notice(args) {
        notification.open(args);
      },
      component: notification,
    });
  }

  ReactDOM.render(
    <AlterNotic message={message} closable={closable} {...props} ref={ref} />,
    div,
  );
};

export default AlterNotic;
