import { CardApresentation, CardInfo, Container } from './App';
import { Card } from './components/Card';

function App() {
  return (
    <Container>
      <CardApresentation className="card">
        <Card />
      </CardApresentation>

      <CardInfo className="read-the-docs">
        Click on the Vite and React logos to learn more
      </CardInfo>
    </Container>
  );
}

export default App;
