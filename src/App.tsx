import './App.css';
import { microphone, webPlayer } from './AudioComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => webPlayer.play()}>Play Oasis</button>
        <button onClick={() => webPlayer.pause()}>Pause Oasis</button>
        <button onClick={() => microphone.record()}>Start recording</button>
        <button onClick={() => microphone.stop()}>Stop recording</button>
      </header>
    </div>
  );
}

export default App;
