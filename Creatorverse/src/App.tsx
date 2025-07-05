import './App.css'
import Header from './components/Header';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ViewCreator from './pages/ViewCreator';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<ShowCreators/>}/>
              <Route path="/add" element={<AddCreator />} />
              <Route path="/edit/:id" element={<EditCreator />}/>
              <Route path="/view/:id" element={<ViewCreator />}/>
          </Routes>

      </>
  )
}

export default App
