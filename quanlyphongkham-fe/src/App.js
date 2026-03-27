import './style/trangchu.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gioithieu from './Component/gioithieu.tsx';  
import Trangchu from './Component/trangchu.tsx';
import Dichvu from './Component/dichvu.tsx';
import Tintuc from './Component/tintuc.tsx';
import Lienhe from './Component/lienhe.tsx';
import Datlich from './Component/datlich.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/dichvu" element={<Dichvu />} />
        <Route path="/datlich" element={<Datlich />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/blog" element={<Tintuc />} />
      </Routes>
    </Router>
  );
}

export default App;
