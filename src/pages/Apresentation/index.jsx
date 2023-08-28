import { Insights } from '../../components/Insights';
import { Module } from '../../components/Module';
import { SubtitlePage } from '../../components/SubtitlePage';
import { TitlePage } from '../../components/TitlePage';
import { ApresentationBox, Container, InsigthsBox } from './styles';

export const Apresentation = () => {
  return (
    <Container>
      <Module title="Introdução" icon="home" />

      <ApresentationBox>
        <TitlePage>
          Olá, me chamo <strong>Otávio Araujo</strong>, e sou{' '}
          <span>desenvolvedor de software.</span>
        </TitlePage>
        <SubtitlePage>
          Eu planejo, projeto e desenvolvo aplicações web e mobile.
        </SubtitlePage>
      </ApresentationBox>

      <InsigthsBox>
        <Insights number="2+" text="Anos de experiência" />
        <Insights number="800+" text="Commits no Github" />
        <Insights number="2000+" text="Contribuições no Github" />
      </InsigthsBox>
    </Container>
  );
};
