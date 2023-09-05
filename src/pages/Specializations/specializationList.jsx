import { AiOutlineAntDesign } from 'react-icons/ai';
import { BsCodeSlash, BsListTask } from 'react-icons/bs';

export const specializationList = [
  {
    id: 1,
    name: 'Design de Interfaces',
    nameTranslated: 'Interface Designer',
    icon: <AiOutlineAntDesign size={20} color="#c32e58" />,
    description:
      'Projeto interfaces para aplicativos e sites, com foco na experiência do usuário.',
    descriptionTranslated:
      'I design interfaces for applications and websites, focusing on user experience.',
  },
  {
    id: 2,
    name: 'Desenvolvimento de Aplicativos e Sites',
    nameTranslated: 'Application and Website Developer',
    icon: <BsCodeSlash size={20} color="#c32e58" />,
    description:
      'Desenvolvo aplicativos e sites utilizando as tecnologias mais modernas e rápidas do mercado.',
    descriptionTranslated:
      'I develop applications and websites using the most modern and fastest technologies on the market.',
  },
  {
    id: 3,
    name: 'Organização de Informações',
    nameTranslated: 'Information Organizer',
    icon: <BsListTask size={20} color="#c32e58" />,
    description:
      'Organizo informações para facilitar o acesso e a compreensão com ferramentas modernas.',
    descriptionTranslated:
      'I organize information for easy access and understanding with modern tools.',
  },
];
