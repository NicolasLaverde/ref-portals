import Player from './components/Player.jsx';
import TimeChallenger from './components/TimerChallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenger title="Easy" targetTime={1} />
        <TimeChallenger title="Medium" targetTime={5} />
        <TimeChallenger title="Hard" targetTime={10} />
        <TimeChallenger title="Too Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
