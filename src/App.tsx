import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ComingSoon } from './pages/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
