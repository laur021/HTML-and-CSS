import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./components/App.jsx";

//the new root API
const root = createRoot(document.getElementById('root'));
root.render(<App />);
