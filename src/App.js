import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <hr />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
