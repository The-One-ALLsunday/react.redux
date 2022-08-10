import * as React from 'react';
import AlterNotic from './AlterNotic';
import { NoticeInstance } from './AlterNotic';

const notificationInstance: {
  [key: string]: Promise<NoticeInstance>;
} = {};

function getNoticeInstance(
  args: ArgsProps,
  callback: (instance: NoticeInstance) => void,
) {
  const cacheKey = `elNotice`;
  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(instance => {
      callback(instance);
    });
    return;
  }
  notificationInstance[cacheKey] = new Promise(resolve => {
    AlterNotic.newInstance(args, notice => {
      resolve(notice);
      callback(notice);
    });
  });
}

export interface ArgsProps {
  message?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
}

const api: any = {
  open: (args: ArgsProps) => {
    getNoticeInstance(args, instance => {
      instance.notice(args);
    });
  },
  close(key: string) {
    Object.keys(notificationInstance).forEach(cacheKey =>
      Promise.resolve(notificationInstance[cacheKey]).then(instance => {
        instance.removeNotice();
      }),
    );
  },
};

['success', 'info', 'warning', 'error'].forEach(type => {
  api[type] = (args: ArgsProps) =>
    api.open({
      ...args,
      type,
    });
});

api.warn = api.warning;

export interface ELNoticeInstance {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
}

export interface ELNoticeApi extends ELNoticeInstance {
  warn(args: ArgsProps): void;
  close(): void;
}

export default api as ELNoticeApi;
