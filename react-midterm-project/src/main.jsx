import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ConfigProvider, theme } from 'antd';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ff4d4d',
          borderRadius: 8,
          colorBgContainer: '#141414',
          colorText: '#e6e6e6',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);