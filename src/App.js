import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ListRoutes from './routes/Routes';

function App() {
  return (   
    <BrowserRouter>
      <ListRoutes />
    </BrowserRouter>
  );
}

export default App;
