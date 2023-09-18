
import Header from './components/header';
import Footer from './components/footer';
import ScroolBar from './components/scroolbar';
import NewsLetter from './components/newsletter';
import Home from './pages/home';

import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <NewsLetter />
      <ScroolBar />
    </div>
  );
}

export default App;
