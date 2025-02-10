import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Header />

      <main>
        <InputGroup label="INITIAL INVESTMENT" />
        <Result />
      </main>
    </>
  );
}

export default App;
