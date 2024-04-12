
import { useState } from 'react';
import './App.css';
import Routes from './Component/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState('React Application Assessment');

  return (
    <div className="bg-image">
      <Routes data={data}></Routes>
    </div>
  );
}

export default App;
