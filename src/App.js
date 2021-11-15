import "./App.css";
import SurveyPage from "./survey";

function App() {
  return (
    <div id="container">
      <header id="header">
        <h1>Travel Lounge</h1>
      </header>

      <nav id="nav">
        <div id="wrap_nav">
          <ul>
            <li>
              <a href="#home">홈</a>
            </li>
            <li>
              <a href="#tour">여행지</a>
            </li>
            <li>
              <a href="#even">이벤트</a>
            </li>
            <li>
              <a href="#mypage">마이페이지</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#signin">Sign in</a>
            </li>
            <li>
              <a href="signup">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="wrap">
        <SurveyPage />
      </div>

      <footer id="footer"></footer>
    </div>
  );
}

export default App;
