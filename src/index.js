import { createRoot } from 'react-dom/client';

//component files
import Top from "./components/Top"
import Bottom from "./components/Bottom"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div><Top /><Bottom /></div>);