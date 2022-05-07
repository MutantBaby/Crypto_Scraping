import "./App.css";
import HomePage from "./HomePage";
import CoinPage from "./CoinPage";
import Header from "./Header";
import { makeStyles } from "@mui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#1a212d",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
