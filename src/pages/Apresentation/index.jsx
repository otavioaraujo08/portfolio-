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
              Hello, I'm <strong>Otávio Araujo</strong>, a developer passionate
              about crafting <strong>digital solutions</strong> that turn ideas
              into reality.
            </>
          ) : (
            <>
              Olá, sou <strong>Otávio Araujo</strong>, desenvolvedor apaixonado
              por criar
              <span> soluções digitais</span> que transformam ideias em
              realidade.
            </>
          )}
        </TitlePage>
        <SubtitlePage>
          {booleanLanguageValue
            ? 'Specialized in planning, designing, and developing web and mobile applications, my goal is to create intuitive and efficient experiences that meet both user and business needs. Let’s build something amazing together!'
            : 'Especializado no planejamento, design e desenvolvimento de aplicações web e mobile, meu objetivo é construir experiências intuitivas e eficientes que atendam às necessidades dos usuários e dos negócios. Vamos criar algo incrível juntos?'}
        </SubtitlePage>
      </ApresentationBox>

      <InsigthsBox>
        <Insights
          number="4+"
          text={
            booleanLanguageValue ? 'Years of experience' : 'Anos de experiência'
          }
        />
        <Insights
          number="1600+"
          text={
            booleanLanguageValue ? 'Commits on Github' : 'Commits no Github'
          }
        />
        <Insights
          number="3000+"
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
