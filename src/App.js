import 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import DetalleComponent from './components/DetalleComponent/DetalleComponent';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { HomeComponent } from './components/HomeComponent/HomeComponent'

import { Routes, Route } from 'react-router-dom';
import CreateComponent from './components/CreateComponent/CreateComponent';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path={'/'} element={<><HomeComponent /></>}></Route>
        <Route path={'/content'} element={<><DetalleComponent /></>}></Route>
        <Route path={'/create'} element={<><CreateComponent /></>}></Route>
      </Routes>

      <FooterComponent className="my-3" />
    </>
  );
}

export default App;
