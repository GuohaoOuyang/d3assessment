import './App.css';
import { DiagnosticScreen } from './screens/DiagnosticScreen';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { GlobalState } from './context/GlobalState';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <GlobalState>
        <main>
          <DiagnosticScreen />
        </main>
      </GlobalState>
    </div>
  );
}

export default App;
