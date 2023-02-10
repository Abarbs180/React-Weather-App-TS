import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import HomePage from "./components/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
