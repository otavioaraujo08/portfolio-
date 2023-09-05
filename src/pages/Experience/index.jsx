import { useSelector } from 'react-redux';
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
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module
        title={booleanLanguageValue ? 'Experience' : 'Experiência'}
        icon="experience"
      />

      <TitlePage>
        {booleanLanguageValue ? (
          <>
            Education and <strong>Experience</strong>
          </>
        ) : (
          <>
            Educação e <strong>Experiência</strong>
          </>
        )}
      </TitlePage>

      {experienceList.map((experience) => (
        <ExperienceBox key={experience.id}>
          <ExperienceData>{experience.date}</ExperienceData>

          <ExperienceTitle>
            {' '}
            {booleanLanguageValue
              ? experience.titleTranslated
              : experience.title}
          </ExperienceTitle>

          <ExperienceCompany
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
          >
            {booleanLanguageValue
              ? experience.companyTranslated
              : experience.company}
          </ExperienceCompany>
        </ExperienceBox>
      ))}
    </Container>
  );
};
