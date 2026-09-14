import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";

function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="ambient" aria-hidden />
      <div className="ambient ambient-2" aria-hidden />
      <div className="flex min-h-dvh flex-col max-w-8xl mx-auto">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
