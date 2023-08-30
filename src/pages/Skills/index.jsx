import { TitlePage } from '../../components/TitlePage';
import { skillList } from './skills';
import { Container, SkillDiv, SkillTitle, SkillsContainer } from './styles';

export const Skills = () => {
  return (
    <Container>
      <TitlePage>
        Minhas <strong>Habilidades</strong>
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
