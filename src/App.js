import styled from 'styled-components';
import Signup from './Signup';

// const Title = styled.h1` 
// font-size: 1.5rem;
// text-align: center;
// color: #f32cd3;
// `

const Main = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  max-width: 1600px;
  background: skyblue;
`;

function App() {
  return (
    <Main>
      <Signup />
    </Main>
  );
}

export default App;
