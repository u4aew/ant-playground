import { ConfigProvider } from 'antd';
import React from 'react';
import Demo from "./src/demo";

const App: React.FC = () => (
    <ConfigProvider theme={{ token: { colorPrimary: 'red' } }}>
        <Demo />
    </ConfigProvider>
);

export default App;
