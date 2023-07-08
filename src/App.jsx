import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import { useMediaQuery } from './hooks/useMediaQuery';
import { SMALL_DESKTOP_WIDTH, LARGE_DESKTOP_WIDTH, BACKGROUND_COLOR } from './constants';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

  const determineWidth = () => {
    if (isLargeDesktop) return LARGE_DESKTOP_WIDTH;
    if (isSmallDesktop) return SMALL_DESKTOP_WIDTH; 
    return "auto";
  }

  return (
    <main className='p-4 lg:flex lg:justify-center' style={{
      backgroundColor: BACKGROUND_COLOR,
    }}>
      <div style={{
        width: determineWidth(),
      }}>
        <Nav/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
