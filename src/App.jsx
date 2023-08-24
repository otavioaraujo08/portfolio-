import { CardApresentation, CardInfo, Container } from './App';
import { Apresentation } from './components/Apresentation';
import { Card } from './components/Card';

function App() {
  return (
    <Container>
      <CardApresentation className="card">
        <div>
          <Card />
        </div>
      </CardApresentation>

      <CardInfo>
        <Apresentation />
      </CardInfo>
    </Container>
  );
}

export default App;
