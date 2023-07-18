import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import { useMediaQuery } from './hooks/useMediaQuery';
import { SMALL_DESKTOP_CONTAINER, LARGE_DESKTOP_CONTAINER, BACKGROUND_COLOR, SMALL_DESKTOP_BREAKPOINT, LARGE_DESKTOP_BREAKPOINT } from './constants';
import MainNav from './components/MainNav';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Experience from './pages/Experience';

function App() {

  const isSmallDesktop = useMediaQuery(`(min-width: ${SMALL_DESKTOP_BREAKPOINT})`);
  const isLargeDesktop = useMediaQuery(`(min-width: ${LARGE_DESKTOP_BREAKPOINT})`);

  const determineWidth = () => {
    if (isLargeDesktop) return LARGE_DESKTOP_CONTAINER;
    if (isSmallDesktop) return SMALL_DESKTOP_CONTAINER; 
    return "auto";
  }

  return (
    <main className={`p-4 lg:flex lg:justify-center ${isLargeDesktop && "pt-8"}`} style={{
      backgroundColor: BACKGROUND_COLOR,
    }}>
      <div style={{
        width: determineWidth(),
      }}>
        <MainNav/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
    </main>
  )
}

export default App
