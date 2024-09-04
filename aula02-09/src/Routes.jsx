import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

import Header from "./Components/Header";


function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                    <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Sobre" element={<Sobre />}/>
                    <Route path="/Contato" element={<Contato />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}
export default RoutesApp

