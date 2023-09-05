import { useSelector } from 'react-redux';
import { Insights } from '../../components/Insights';
import { Module } from '../../components/Module';
import { SubtitlePage } from '../../components/SubtitlePage';
import { TitlePage } from '../../components/TitlePage';
import { ApresentationBox, Container, InsigthsBox } from './styles';

export const Apresentation = () => {
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module
        title={booleanLanguageValue ? 'Introduction' : 'Introdução'}
        icon="home"
      />

      <ApresentationBox>
        <TitlePage>
          {booleanLanguageValue ? (
            <>
              Hello, my name is <strong>Otávio Araujo</strong>, and I'm a{' '}
              <strong>software developer.</strong>
            </>
          ) : (
            <>
              Olá, me chamo <strong>Otávio Araujo</strong>, e sou{' '}
              <span>desenvolvedor de software.</span>
            </>
          )}
        </TitlePage>
        <SubtitlePage>
          {booleanLanguageValue
            ? 'I plan, design and develop web and mobile applications.'
            : 'Eu planejo, projeto e desenvolvo aplicações web e mobile.'}
        </SubtitlePage>
      </ApresentationBox>

      <InsigthsBox>
        <Insights
          number="2+"
          text={
            booleanLanguageValue ? 'Years of experience' : 'Anos de experiência'
          }
        />
        <Insights
          number="800+"
          text={
            booleanLanguageValue ? 'Commits on Github' : 'Commits no Github'
          }
        />
        <Insights
          number="2000+"
          text={
            booleanLanguageValue
              ? 'Contributions on Github'
              : 'Contribuições no Github'
          }
        />
      </InsigthsBox>
    </Container>
  );
};
