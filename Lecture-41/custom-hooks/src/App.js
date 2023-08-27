import './App.css';
import GithubCard from './components/GithubCard';
import GithubCardWithCustomHook from './components/GithubCardWithCustomHook';
import useToggle from './hooks/useToggle';

function App() {
  const [isHappy, toggleIsHappy] = useToggle(true);

  return (
    <div className="App">
      <h1>{isHappy ? '😄' : '🙁'}</h1>
      <button onClick={toggleIsHappy}>Toggle</button>
      {/* <GithubCard/> */}
      <GithubCardWithCustomHook/>
    </div>
  );
}

export default App;
