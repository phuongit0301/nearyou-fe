import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { PrivacyPolicy } from './pages/Privacy';
import { TermsOfService } from './pages/Term';

function App() {
  return (
    <div className="container flex flex-col mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/term" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
