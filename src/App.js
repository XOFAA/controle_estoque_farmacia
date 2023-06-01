import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { HomeFarmaceutico } from "./pages/home_farmaceutico";
import { HomeAdmin } from "./pages/home_admin";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/farmaceutico/home" element={<HomeFarmaceutico/>}/>
      <Route path="/admin/home" element={<HomeAdmin/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
