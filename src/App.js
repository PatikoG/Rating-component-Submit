import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FirstPage from './FirstPage';
import Submited from './Submited';



function App() {
  const [number, setNumber]= useState(0)

  
 

  return (
    <Main>
      <Routes>
        <Route path='/' element={<FirstPage number={number} setNumber={setNumber} />}/>
        <Route path='/submited' element={<Submited number={number} />}/>

      </Routes>
    </Main>
  );
}

export default App;


const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #131518;
`


