import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='App'>
      <div className='layout'>
        <div className='sidebar'>
          <NavBar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
