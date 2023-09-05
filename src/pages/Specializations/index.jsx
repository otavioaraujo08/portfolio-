import { useSelector } from 'react-redux';
import { Module } from '../../components/Module';
import { TitlePage } from '../../components/TitlePage';
import { specializationList } from './specializationList';
import {
  Container,
  SpecializationContainer,
  SpecializationDescription,
  SpecializationName,
  SpecializationsContainer,
} from './styles';

export const Specializations = () => {
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module
        title={booleanLanguageValue ? 'Services' : 'Serviços'}
        icon="tool"
      />

      <TitlePage>
        {booleanLanguageValue ? (
          <>
            My <strong>expertises</strong>
          </>
        ) : (
          <>
            Minhas <strong>especialidades</strong>
          </>
        )}
      </TitlePage>

      {specializationList.map((specialization) => (
        <SpecializationsContainer key={specialization.id}>
          <SpecializationContainer>
            <SpecializationName>
              {booleanLanguageValue
                ? specialization.nameTranslated
                : specialization.name}
            </SpecializationName>

            {specialization.icon}
          </SpecializationContainer>

          <SpecializationDescription>
            {booleanLanguageValue
              ? specialization.descriptionTranslated
              : specialization.description}
          </SpecializationDescription>
        </SpecializationsContainer>
      ))}
    </Container>
  );
};
