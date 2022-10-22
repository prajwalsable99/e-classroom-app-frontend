
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <>
            <NoteState>

                <BrowserRouter>
                    <Navbar></Navbar>

                    

                        <Routes>
                            <Route exact path="/" element={<Home></Home>}> </Route>
                            <Route exact path="/Login" element={<Login></Login>}> </Route>
                            <Route exact path="/Signup" element={<Signup></Signup>}> </Route>
                            <Route exact path="/about" element={<About></About>}> </Route>

                        </Routes>
                    

                </BrowserRouter>

            </NoteState>
        </>
    );
}

export default App;
