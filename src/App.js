import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
// import logo from './aaliyah.JPG';
// import './App.css';

function App() {
  const [categories] = useState([
    
           
        { name: "babies", description: "Photos of newborns and babies",},
        { name: "couples", description: "Engagements and couples" },
        { name: "seniors", description: "Graduates and singles"},
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
    ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
 
      </main>
    </div>
  );
}

export default App;
