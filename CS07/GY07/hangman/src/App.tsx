import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";

const App = () => {
  // Application state (data)
  const maxTips = 9;
  const word = "alma";
  const tips = ["a", "l", "s", "s", "s", "s", "s", "s", "s"];
  const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz".split("");

  // Event handlers

  // Computed values

  return (
    <>
      <h1>Hangman</h1>

      <Word />

      <button>New game</button>
      <Buttons text={buttonText} />

      <Result />

      <Hangman />
    </>
  );
};

export default App;
