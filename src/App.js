
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Settings from './Dashboard/Settings';
import Root from './Root';
import Create from './Dashboard/Create';
import NotFound from './notfound/NotFound';


function App() {




  return (
    
    
   <Routes>
    <Route path='/'  element={<Root/>}>
      <Route index element={<HomePage/>}/>
      <Route path='Create' element={<Create/>}/>
      <Route path='Settings' element={<Settings/>}/>
      <Route path='profile' element={<Settings/>}/>
      <Route path='logout' element={<Settings/>}/>
      <Route path='Create' element={<Settings/>}/>
      
    </Route>
     <Route path='*' element={<NotFound/>}/>
 
   </Routes>



  );
}

export default App;
