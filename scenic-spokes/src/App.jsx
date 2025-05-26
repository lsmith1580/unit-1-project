import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import NotFoundPage from './pages/NotFoundPage';
import RouteMap from './components/ScenicRoute';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  return (
    <div id="window">
      <Router>
          <Header />
          <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="community" element={<CommunityPage/>}/>
                <Route path="route-map" element={<RouteMap/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </main>
          <Footer/>
        </Router>
    </div>
  );
};

export default App;
