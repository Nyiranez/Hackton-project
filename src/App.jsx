
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Styling}   from "./pages/styling"
import  {CrudfromAPIs}  from "./pages/crudfromAPIs"
import { Datadisplay}  from "./pages/datadisplay"
import { Datamanipulation } from "./pages/datamanipulation"
import { Dataselection } from "./pages/dataselection"
import { Forms } from "./pages/forms"
import { Imagehandling } from "./pages/imagehandling"
import { Reacthooks } from "./pages/reacthooks"
import { ReactRouterDOM } from "./pages/reactRouterDOM"
import { Statepropagation } from "./pages/statepropagation"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Styling />}>
            <Route path="/styling/crudfromAPIs" element={<CrudfromAPIs/>} />
            <Route path="/styling/datadisplay" element={<Datadisplay />} />
            <Route path="/styling/datamanipulation" element={<Datamanipulation />} />
            <Route path="/styling/dataselection" element={<Dataselection />} />
            <Route path="/styling/forms" element={<Forms />} />
            <Route path="/styling/imagehandling" element={<Imagehandling />} />
            <Route path="/styling/reacthooks" element={<Reacthooks />} />
            <Route path="/styling/reactRouterDOM" element={<ReactRouterDOM />} />
            <Route path="/styling/statepropagation" element={<Statepropagation />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
