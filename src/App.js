import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Experience from './components/Experience'
import DSA from './components/DSA & CP'
// import Portfolio from './components/Portfolio'
// import Dashboard from './components/Dashboard'
import './App.scss';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/coding" element={<DSA />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
