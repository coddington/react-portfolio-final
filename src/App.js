import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import FactPage from './components/FactPage';
import VisualizePage from './components/VisualizePage';
import AboutUs from './components/AboutUs';
import ArtDesign from "./components/ArtDesign";
import Health from "./components/Health";
import Books from "./components/Books"
import Education from "./components/Education";
import Entertainment from "./components/Entertainment";
import Communication from "./components/Communication";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/fact" component={FactPage}/>
      <Route exact path="/visualize" component={VisualizePage}/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/artdesign" component={ArtDesign}/>
      <Route exact path="/health" component={Health}/>
      <Route exact path="/books" component={Books}/>
      <Route exact path="/education" component={Education}/>
      <Route exact path="/entertainment" component={Entertainment}/>
      <Route exact path="/communication" component={Communication}/>
      
      


    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App

