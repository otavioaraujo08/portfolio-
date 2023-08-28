import { Module } from '../../components/Module';
import { TitlePage } from '../../components/TitlePage';
import { experienceList } from './experience';
import {
  Container,
  ExperienceBox,
  ExperienceCompany,
  ExperienceData,
  ExperienceTitle,
} from './styles';

export const Experience = () => {
  return (
    <Container>
      <Module title="Experiência" icon="experience" />

      <TitlePage>
        Educação e <strong>Experiência</strong>
      </TitlePage>

      {experienceList.map((experience) => (
        <ExperienceBox key={experience.id}>
          <ExperienceData>{experience.date}</ExperienceData>

          <ExperienceTitle>{experience.title}</ExperienceTitle>

          <ExperienceCompany
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
          >
            {experience.company}
          </ExperienceCompany>
        </ExperienceBox>
      ))}
    </Container>
  );
};
