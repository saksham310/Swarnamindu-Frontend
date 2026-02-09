import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/layout';
import Dashboard from './pages/Dashboard';
import RegistrationPage from './pages/RegistrationPage';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;