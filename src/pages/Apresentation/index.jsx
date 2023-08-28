import { Insights } from '../../components/Insights';
import { Module } from '../../components/Module';
import {
  ApresentationBox,
  ApresentationText,
  ApresentationSubText,
  Container,
  InsigthsBox,
} from './styles';

export const Apresentation = () => {
  return (
    <Container>
      <Module title="Introdução" icon="home" />

      <ApresentationBox>
        <ApresentationText>
          Olá, me chamo <strong>Otávio Araujo</strong>, e sou{' '}
          <span>desenvolvedor de software.</span>
        </ApresentationText>
        <ApresentationSubText>
          Eu planejo, projeto e desenvolvo aplicações web e mobile.
        </ApresentationSubText>
      </ApresentationBox>

      <InsigthsBox>
        <Insights number="2+" text="Anos de experiência" />
        <Insights number="800+" text="Commits no Github" />
        <Insights number="2000+" text="Contribuições no Github" />
      </InsigthsBox>
    </Container>
  );
};
