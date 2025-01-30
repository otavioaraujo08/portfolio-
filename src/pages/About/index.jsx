import { useSelector } from 'react-redux';
import { Module } from '../../components/Module';
import { SubtitlePage } from '../../components/SubtitlePage';
import { TitlePage } from '../../components/TitlePage';
import { ApresentationBox, Container } from './styles';

export const About = () => {
  const booleanLanguageValue = useSelector((state) => state.language);

  return (
    <Container>
      <Module icon="user" title={booleanLanguageValue ? 'About' : 'Sobre'} />

      <ApresentationBox>
        <TitlePage title={booleanLanguageValue ? 'Resume' : 'Resumo'} />

        <SubtitlePage>
          {booleanLanguageValue ? (
            <>
              Fullstack Web Developer with 4+ years experience. Web using
              current technologies such as{' '}
            </>
          ) : (
            <>
              Desenvolvedor Web Fullstack com 4+ anos de experiência. Participei
              de projetos Web utilizando tecnologias atuais como{' '}
            </>
          )}
          <strong>
            ReactJs, NextJs, Vue, Nuxt, NodeJs, NestJs, Express, TypeScript,
            Jest, MongoDB, MySQL, HTML, CSS, TailwindCSS, Github
          </strong>{' '}
          {booleanLanguageValue
            ? 'among others. I am a Bachelor in Computer Science; working in the Public Defender of the State of Para.'
            : `entre outras. Sou Bacharel em Ciência da computação; atualmente atuando na Defensoria Pública do Estado do Pará.`}
        </SubtitlePage>
      </ApresentationBox>
    </Container>
  );
};
