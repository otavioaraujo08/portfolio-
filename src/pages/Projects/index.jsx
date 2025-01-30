import { useSelector } from 'react-redux';
import { Module } from '../../components/Module';
import { TitlePage } from '../../components/TitlePage';
import { Container } from './styles';

export const Projects = () => {
  const booleanLanguageValue = useSelector((state) => state.language);
  return (
    <Container>
      <Module
        title={booleanLanguageValue ? 'Projects' : 'Projetos'}
        icon="project"
      />

      <TitlePage>
        {booleanLanguageValue ? (
          <>
            My <strong>Projects</strong>
          </>
        ) : (
          <>
            Meus <strong>Projetos</strong>
          </>
        )}
      </TitlePage>
    </Container>
  );
};
