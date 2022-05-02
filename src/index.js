import { createRoot } from 'react-dom/client';

//component files
import Top from "./components/Top"
import Bottom from "./components/Bottom"

const fetchData = () => {
return fetch("localhost:8080/user/data/")
      .then((response) => response.json())
      .then((data) => console.log(data));}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<div><Top /><Bottom /></div>);