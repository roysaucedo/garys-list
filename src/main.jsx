import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import "./App.css";
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import EntryList from './components/EntryList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
    {/* CATEGORIES */}
    <EntryList />
  </StrictMode>,
)
