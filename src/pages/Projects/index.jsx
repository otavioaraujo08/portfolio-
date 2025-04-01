import { Carousel } from '@/components/Carousel';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Module } from '../../components/Module';
import { TitlePage } from '../../components/TitlePage';
import { projetctList } from './projectList';
import { Container, ProjectDiv, ProjectSubTitle, ProjectTitle } from './styles';

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

      <ProjectDiv>
        {projetctList.map((project, index) => (
          <ProjectDiv key={project.id}>
            {project.image ? (
              <div className="w-full flex justify-center items-center overflow-hidden">
                <Carousel pictures={project.image} />
              </div>
            ) : null}

            <ProjectDiv>
              <ProjectTitle>{project.title}</ProjectTitle>
              {booleanLanguageValue ? (
                <ProjectSubTitle>{project.description}</ProjectSubTitle>
              ) : (
                <ProjectSubTitle>{project.descricao}</ProjectSubTitle>
              )}
            </ProjectDiv>

            {project.api ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Button variant="outlined">
                  Redirecionar para a documentação da API
                </Button>
              </a>
            ) : (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Button
                  variant="outlined"
                  style={
                    index === projetctList.length - 1
                      ? { marginBottom: '2rem' }
                      : {}
                  }
                >
                  Redirecionar para o site do projeto
                </Button>
              </a>
            )}

            {index !== projetctList.length - 1 && (
              <hr style={{ borderColor: '#ffffff', marginBottom: '2rem' }} />
            )}
          </ProjectDiv>
        ))}
      </ProjectDiv>
    </Container>
  );
};
