
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import NotFound from './pages/NotFound';


function App() {

  return (
      <div className="app">
          <Header />
          <main className="main">
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/post/:id" element={<Post />} />
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
