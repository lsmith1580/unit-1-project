import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import NotFoundPage from './pages/NotFoundPage';
import RouteMap from './components/RouteMap';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === '/community') {
  //     document.body.style.overflow = 'auto';
  //   } else {
  //     document.body.style.overflow = 'hidden';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'hidden'
  //   };
  // }, [location]);

  return (
    <div id="window">
          <Header />
            <main className='main-content'>
              <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage/>}/>
                <Route path="community" element={<CommunityPage/>}/>
                <Route path="route-map" element={<RouteMap/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
              </Routes>
            </main>
          <Footer/>
    </div>
  );
};

export default App;
