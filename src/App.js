import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layouts/Navbar";


function App() {
  return (
    <>
      <Router>
        <div className='screen-container'>
          <Navbar />
          <main>content</main>
        </div>
      </Router>

    </>
  );
}

export default App;
