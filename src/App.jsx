import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import { useMediaQuery } from './hooks/useMediaQuery';
import { SMALL_DESKTOP_WIDTH, LARGE_DESKTOP_WIDTH } from './constants';

function App() {

  const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

  const determineWidth = () => {
    if (isLargeDesktop) return LARGE_DESKTOP_WIDTH;
    if (isSmallDesktop) return SMALL_DESKTOP_WIDTH; 
    return "auto";
  }

  return (
    <main className='m-4 lg:flex lg:justify-center'>
      <div style={{
        width: determineWidth(),
      }}>
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
