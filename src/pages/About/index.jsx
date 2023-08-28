import { Module } from '../../components/Module';
import {
  ApresentationText,
  ApresentationSubText,
  Container,
  ApresentationBox,
} from './styles';

export const About = () => {
  return (
    <Container>
      <Module icon="user" title="Sobre" />

      <ApresentationBox>
        <ApresentationText>Meu trajeto...</ApresentationText>

        <ApresentationSubText>
          Desenvolvedor Javascript Fullstack com 2+ anos de experiência.
          Participei de projetos Web utilizando tecnologias atuais como{' '}
          <strong>
            ReactJs, Redux, Vue, Nuxt, NodeJs, NextJs, Express, TypeScript,
            Jest, MongoDB, MySQL, HTML, CSS, TailwindCSS, Github
          </strong>{' '}
          entre outras.
        </ApresentationSubText>

        <ApresentationSubText>
          <strong>Sou Bacharel em Ciência da computação</strong>, atualmente
          atuando em projetos pessoais com o intuito de aprimorar habilidades
          técnicas.
        </ApresentationSubText>

        <ApresentationSubText>
          <strong>Apaixonado</strong> por tudo que envolve{' '}
          <strong>tecnologia</strong> e <strong>arte</strong>, gosto de
          compartilhar e ajudar no aprendizado da comunidade.
        </ApresentationSubText>
      </ApresentationBox>
    </Container>
  );
};
