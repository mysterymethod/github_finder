import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layouts/Navbar";
import Footer from './components/layouts/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import { GithubProvider } from './context/github/GithubContext';


function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <div className='screen-container'>
            <Navbar />
            <main>
              <Routes>
                <Route
                  exact
                  path='/'
                  element={<Home />}
                />

                <Route
                  exact
                  path='/about'
                  element={<About />}
                />

                <Route
                  exact
                  path='/notfound'
                  element={<NotFound />}
                />

                <Route
                  exact
                  path='/*'
                  element={<NotFound />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
