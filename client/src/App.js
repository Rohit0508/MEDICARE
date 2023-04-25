import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

export default function App() {
    return (

        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/home" element={<h1>Home</h1>}></Route>
                    <Route path="/about" element={<h1>About</h1>}></Route>
                    <Route path="/service" element={<h1>Service</h1>}></Route>
                    <Route path="/Contact" element={<h1>Contact</h1>}></Route>
                    <Route path="/SignUp" element={<h1>h</h1>}></Route>
                    <Route path="Logout"></Route>
                </Routes>
            </BrowserRouter>
           
        </div>
    );
}