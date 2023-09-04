import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@mui/material';
import DeveloperPhoto from '../../assets/developerPhoto.jpg';
import {
  CardContainer,
  CardHeader,
  HeaderTitle,
  HeaderSubTitle,
  ImageContent,
  InformationText,
  IconButtonStyled,
  ButtonsContainer,
  GithubIcon,
  LinkedinIcon,
  VSIcon,
  SwitchBox,
} from './styles';
import { changeStatus } from '../../store/LanguageStore';

export const Card = () => {
  const booleanLanguageValue = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(changeStatus());
  };

  return (
    <CardContainer>
      <CardHeader>
        <HeaderTitle>Otávio Araujo</HeaderTitle>

        <HeaderSubTitle>Web Developer</HeaderSubTitle>
      </CardHeader>

      <ImageContent alt="developer image" src={DeveloperPhoto} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <InformationText>otaviodev08@gmail.com</InformationText>
        <InformationText>Belém / Brasil </InformationText>
      </div>

      <ButtonsContainer>
        <a
          href="https://github.com/otavioaraujo08"
          target="_blank"
          rel="noreferrer"
        >
          <IconButtonStyled>
            <GithubIcon />
          </IconButtonStyled>
        </a>

        <a
          href="https://br.linkedin.com/in/ot%C3%A1vio-araujo-77474b1ab?trk=people-guest_people_search-card"
          target="_blank"
          rel="noreferrer"
        >
          <IconButtonStyled>
            <LinkedinIcon />
          </IconButtonStyled>
        </a>

        <a
          href="https://github.com/otavioaraujo08/portfolio-"
          target="_blank"
          rel="noreferrer"
        >
          <IconButtonStyled>
            <VSIcon />
          </IconButtonStyled>
        </a>
      </ButtonsContainer>

      <SwitchBox>
        <InformationText>
          {booleanLanguageValue ? 'Change language' : 'Alterar linguagem'}
        </InformationText>

        <Switch value={booleanLanguageValue} onClick={handleToggle} />
      </SwitchBox>
    </CardContainer>
  );
};
