import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home' 
import Profile from './components/Profile/Profile'
import View from './components/View/View'
import Upload from './components/Upload/Upload'
import { DataContext } from './DataContext';

function App() {
  const { web3Handler, account } = useContext(DataContext)
  // useEffect(() => {
  //   web3Handler()
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/view" element={<View />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
