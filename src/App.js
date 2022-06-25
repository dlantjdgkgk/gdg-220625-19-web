import styled from "styled-components";
import { Gnb } from "./components/Gnb";

const Wrap = styled.div`
width: 100%;
height: 100vh;
`;

function App() {
  return (
    <Wrap><Gnb/></Wrap>
  );
}

export default App;
