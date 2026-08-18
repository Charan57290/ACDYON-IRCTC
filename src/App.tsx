import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PNRStatusPage } from './pages/PNRStatusPage';
import { SchedulePage } from './pages/SchedulePage';
import { HelpPage } from './pages/HelpPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pnr-status" element={<PNRStatusPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
