import AboutUs from './components/AboutUs';
import AppHeader from './components/AppHeader';
import ClipsTwitch from './components/ClipsTwitch';
import Introduction from './components/Introduction';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Introduction />
      <ClipsTwitch />
      <AboutUs />
      <JoinUs />
    </div>
  );
}

export default App;
