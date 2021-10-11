import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import Notes from './components/Notes'

function App() {
  return (
      <>
        <Header/>
        <CreateNote/>
        <Notes/>
      </>
    
  );
}

export default App;
