import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages
import HomeSection from './Home'; 
import ShopProduct from './pages/shoproduct';// Make sure this path is correct!

// Import Global Components

import AnnouncementSection from "./components/Announcement";
import NavbarSection from "./components/navbar";
import FooterSection from "./components/footer";
import ContactSection from './pages/contactus';

function App() {
  return (
    <BrowserRouter>
      {/* The background color wrapper for the whole app */}
      <div className="bg-white min-h-screen flex flex-col">
        
        {/* These show on EVERY page */}
        <AnnouncementSection />
        <NavbarSection />

        {/* This is where the page content switches out */}
        <main className="flex-grow">
            <Routes>
              {/* When the URL is "/", show Home */}
              <Route path="/" element={<HomeSection />} />
              <Route path="/contactus" element={<ContactSection/>}></Route>
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