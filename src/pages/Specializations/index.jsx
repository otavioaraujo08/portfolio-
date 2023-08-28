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
  return (
    <Container>
      <Module title="Serviços" icon="tool" />

      <TitlePage>
        Minhas <strong>especialidades</strong>
      </TitlePage>

      {specializationList.map((specialization) => (
        <SpecializationsContainer key={specialization.id}>
          <SpecializationContainer>
            <SpecializationName>{specialization.name}</SpecializationName>

            {specialization.icon}
          </SpecializationContainer>

          <SpecializationDescription>
            {specialization.description}
          </SpecializationDescription>
        </SpecializationsContainer>
      ))}
    </Container>
  );
};
