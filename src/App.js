import logo from './logo.svg';
import './App.css';
import { Typography } from "@material-tailwind/react";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="" style={{ textAlign: "center", color: "white" }}>
        <Typography variant="h1" style={{ fontSize: "4rem" }}>
          Website under development
        </Typography>
        <Typography variant="subtitle1" style={{ marginTop: "20px" }}>
          We are working hard to bring you an amazing experience. Stay tuned!
        </Typography>
      </div>
    </div>
  );
}

export default App;
