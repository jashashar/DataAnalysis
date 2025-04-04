import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import cubejs from "@cubejs-client/core";
import WebSocketTransport from "@cubejs-client/ws-transport";
import cubeJsData from "./config.js";
import { CubeProvider } from '@cubejs-client/react';

const cubeApi = cubejs(cubeJsData.CUBEJS_TOKEN, { apiUrl: cubeJsData.CUBEJS_API_URL });

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <CubeProvider cubeApi={cubeApi}>
      <App />
    </CubeProvider>
  // </StrictMode>,
)
