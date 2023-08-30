import { CardApresentation, CardInfo, Container } from './App';
import { Card } from './components/Card';
import { Apresentation } from './pages/Apresentation';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Specializations } from './pages/Specializations';
import { Skills } from './pages/Skills';

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

        <About />

        <Experience />

        <Specializations />

        <Skills />
      </CardInfo>
    </Container>
  );
}

export default App;
