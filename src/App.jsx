import React, { useState } from 'react'; // 1. Added React and useState import
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import HomeSection from './Home'; 
import ShopProduct from './pages/shoproduct';

// Import Global Components
import AnnouncementSection from "./components/Announcement";
import NavbarSection from "./components/navbar";
import FooterSection from "./components/footer";
import ContactSection from './pages/contactus';
import Aboutussection from './pages/aboutusUI';

// 2. Import the Loading Screen component (adjust the path if you saved it elsewhere)
import LoadingScreen from './assets/loadupscreen';

function App() {
  // 3. Add the state to control the loading screen
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      
      {/* 4. Render the Loading Screen if isLoading is true */}
      {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* 5. Added dynamic classes to hide scrollbars while the loading screen is active */}
      <div className={`bg-white min-h-screen flex flex-col ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* These show on EVERY page */}
        <AnnouncementSection />
        <NavbarSection />

        {/* This is where the page content switches out */}
        <main className="flex-grow">
            <Routes>
              {/* When the URL is "/", show Home */}
              <Route path="/" element={<HomeSection />} />
              <Route path="/contactus" element={<ContactSection/>} />
              <Route path="/aboutusUI" element={<Aboutussection/>}></Route>
              <Route path="/shoproduct" element={<ShopProduct />} />
            </Routes>
        </main>

        {/* This shows on EVERY page */}
        <FooterSection/>
        
      </div>
    </BrowserRouter>
  )
}

export default App;