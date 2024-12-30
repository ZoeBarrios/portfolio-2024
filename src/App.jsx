import './App.css'
import Routes from './Routes'
import useTheme from './stores/themeStore';
import BtnLanguage from './components/btnLanguage';
import { ToastContainer } from 'react-toastify';

function App() {
  const { theme } = useTheme();
  const bg_color_deg = theme === "day"
    ? 'bg-gradient-to-r from-day_bg_main from-10% to-day_bg_2main text-day_text_color'
    : 'bg-gradient-to-r from-night_bg_main to-night_bg_2main text-night_text_color';

  return (
    <div className={`font-lato ${bg_color_deg}`}>
      <ToastContainer />
      <Routes></Routes>
      <BtnLanguage />
    </div>
  )
}

export default App
