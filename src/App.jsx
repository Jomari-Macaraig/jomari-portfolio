import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="ambient" aria-hidden />
      <div className="ambient ambient-2" aria-hidden />
      <div className="flex min-h-dvh flex-col max-w-7xl mx-auto">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
