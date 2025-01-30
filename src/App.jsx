import { CardApresentation, CardInfo, Container } from './App';
import { Card } from './components/Card';
import { About } from './pages/About';
import { Apresentation } from './pages/Apresentation';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Specializations } from './pages/Specializations';

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

        <Projects />
      </CardInfo>
    </Container>
  );
}

export default App;
