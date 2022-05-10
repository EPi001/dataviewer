import React from 'react'
import { createRoot } from 'react-dom/client';
import "react-widgets/styles.css";
//component files
import Top from "./components/Top"
import Bottom from "./components/Bottom"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div><Top /><Bottom /></div>);