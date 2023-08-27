import { Module } from '../Module';
import { experienceList } from './experience';
import {
  ApresentationText,
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

      <ApresentationText>
        Educação e <strong>Experiência</strong>
      </ApresentationText>

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
