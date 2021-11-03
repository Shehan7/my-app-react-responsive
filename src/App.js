import "./App.css";
import Home from './pages/home/home';
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Main from "./main";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
       */}
      <Main />
      {/* <div>
        <a href='#'>
          <button className='backToTop'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
          </button>
        </a>
      </div> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
