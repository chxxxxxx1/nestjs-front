import { App, ConfigProvider } from 'antd';
import React from 'react';

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider>
      <App>{children}</App>
    </ConfigProvider>
  );
};
