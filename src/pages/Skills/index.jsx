import { useSelector } from 'react-redux';
import { TitlePage } from '../../components/TitlePage';
import { skillList } from './skills';
import { Container, SkillDiv, SkillTitle, SkillsContainer } from './styles';
import { Module } from '../../components/Module';

export const Skills = () => {
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module
        title={booleanLanguageValue ? 'Skills' : 'Habilidades'}
        icon="skill"
      />

      <TitlePage>
        {booleanLanguageValue ? (
          <>
            My <strong>Skills</strong>
          </>
        ) : (
          <>
            Minhas <strong>Habilidades</strong>
          </>
        )}
      </TitlePage>

      <SkillsContainer>
        {skillList.map((skill) => (
          <SkillDiv key={skill.id}>
            {skill.icon || skill.image}

            <SkillTitle>{skill.name}</SkillTitle>
          </SkillDiv>
        ))}
      </SkillsContainer>
    </Container>
  );
};
