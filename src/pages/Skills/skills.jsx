import { SkillLogo } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaVuejs } from 'react-icons/fa';
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoRedux,
  BiLogoPython,
  BiLogoFlask,
  BiLogoNodejs,
  BiSkipNextCircle,
  BiLogoMongodb,
} from 'react-icons/bi';
import { RiJavascriptLine } from 'react-icons/ri';
import { GiPineapple } from 'react-icons/gi';
import { TbBrandTypescript, TbBrandDjango } from 'react-icons/tb';
import { SiMaterialdesign, SiQuasar, SiExpress } from 'react-icons/si';

export const skillList = [
  {
    id: '1',
    name: 'HTML',
    image: <SkillLogo src="/public/html.png" alt="Html" />,
    icon: <AiFillHtml5 size={40} />,
  },
  {
    id: '2',
    name: 'CSS',
    image: <SkillLogo src="/public/css.png" alt="Css" />,
    icon: <BiLogoCss3 size={40} />,
  },
  {
    id: '3',
    name: 'Javascript',
    image: <SkillLogo src="/public/javascript.png" alt="Javascript" />,
    icon: <RiJavascriptLine size={40} />,
  },
  {
    id: '4',
    name: 'TypeScript',
    image: <SkillLogo src="/public/typescript.png" alt="Typescript" />,
    icon: <TbBrandTypescript size={40} />,
  },
  {
    id: '5',
    name: 'React',
    image: <SkillLogo src="/public/react.png" alt="React" />,
    icon: <BiLogoReact size={40} />,
  },
  {
    id: '6',
    name: 'Redux',
    image: <SkillLogo src="/public/redux.png" alt="Redux" />,
    icon: <BiLogoRedux size={40} />,
  },
  {
    id: '7',
    name: 'Material UI',
    image: <SkillLogo src="/public/materialUi.png" alt="Material UI" />,
    icon: <SiMaterialdesign size={40} />,
  },
  {
    id: '8',
    name: 'Vue',
    image: <SkillLogo src="/public/vue.png" alt="Vue" />,
    icon: <FaVuejs size={40} />,
  },
  {
    id: '9',
    name: 'Pinia',
    image: <SkillLogo src="/public/pinia.png" alt="Pinia" />,
    icon: <GiPineapple size={40} />,
  },
  {
    id: '10',
    name: 'Quasar',
    image: <SkillLogo src="/public/quasar.png" alt="Quasar" />,
    icon: <SiQuasar size={40} />,
  },
  {
    id: '11',
    name: 'Python',
    image: <SkillLogo src="/public/python.png" alt="Python" />,
    icon: <BiLogoPython size={40} />,
  },
  {
    id: '12',
    name: 'Flask',
    image: <SkillLogo src="/public/flask.png" alt="Flask" />,
    icon: <BiLogoFlask size={40} />,
  },
  {
    id: '13',
    name: 'Django',
    image: <SkillLogo src="/public/django.png" alt="Django" />,
    icon: <TbBrandDjango size={40} />,
  },
  {
    id: '14',
    name: 'Node JS',
    image: <SkillLogo src="/public/node.png" alt="Node" />,
    icon: <BiLogoNodejs size={40} />,
  },
  {
    id: '15',
    name: 'Next',
    image: <SkillLogo src="/public/next.png" alt="Next" />,
    icon: <BiSkipNextCircle size={40} />,
  },
  {
    id: '16',
    name: 'Express',
    image: <SkillLogo src="/public/express.png" alt="Express" />,
    icon: <SiExpress size={40} />,
  },
  {
    id: '17',
    name: 'MongoDB',
    image: <SkillLogo src="/public/mongoDB.png" alt="mongoDB" />,
    icon: <BiLogoMongodb size={40} />,
  },
];
