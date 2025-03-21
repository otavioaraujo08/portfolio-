import AnimeManager from '/projects/animeManager/animeManager.webp';
import pokeApiImage from '/projects/pokeApi/pokeApi.webp';
import vaultGames from '/projects/vaultGames/vaultGames.webp';

export const projetctList = [
  {
    id: 1,
    image: [{ id: 1, url: vaultGames }],
    title: 'Vault Games',
    descricao:
      'O Vault Games é a plataforma ideal para você que adora jogar e quer manter o controle sobre seus jogos de forma organizada e prática. Aqui, você pode adicionar os jogos que já jogou ou ainda vai jogar, registrar a quantidade de horas que passou em cada um deles, e acompanhar seu progresso com facilidade. Cada jogo possui um status personalizado(em andamento, finalizado, pausado, etc.) e uma avaliação feita por você, para que nunca mais se esqueça do que achou de cada experiência.Com o Vault Games, você tem uma visão clara do seu histórico de jogos, podendo planejar suas próximas jogadas com base nas suas preferências e tempo disponível. Além disso, você pode filtrar e buscar jogos por diversos critérios, tornando sua experiência ainda mais personalizada e eficiente.Gerencie sua coleção de games de maneira simples, mas completa, e nunca mais perca a conta de qual jogo jogar a seguir!',
    description:
      "The Vault Games is the ideal platform for you who love to play and want to keep control over your games in an organized and practical way. Here, you can add the games you've already played or are going to play, record the number of hours you've spent on each of them, and track your progress with ease. Each game has a custom status (in progress, finished, paused, etc.) and an evaluation made by you, so you never forget what you thought of each experience. With Vault Games, you have a clear view of your game history, being able to plan your next moves based on your preferences and available time. In addition, you can filter and search for games by various criteria, making your experience even more personalized and efficient. Manage your game collection in a simple, yet complete way, and never lose track of which game to play next!",
    link: 'https://vault-games.netlify.app/',
    techs: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'Zustand',
      'Axios',
      'TanStack Table',
      'Lucide React',
      'ESLint',
      'Autoprefixer',
      'Tailwind CSS Animate',
    ],
    api: false,
  },
  {
    id: 2,
    title: 'Vault Games API',
    link: 'https://github.com/otavioaraujo08/vault-games-api',
    descricao:
      'Vault Games API é uma aplicação de servidor construída usando o framework NestJS. Ela fornece um backend robusto e escalável para gerenciar jogos e usuários. A API inclui recursos como autenticação de usuários, gerenciamento de jogos e análises de dashboard. Utiliza MongoDB para armazenamento de dados e Mongoose para modelagem de dados. A aplicação é projetada para ser facilmente implantada em plataformas de nuvem como Vercel e AWS.',
    description:
      'Vault Games API is a server-side application built using the NestJS framework. It provides a robust and scalable backend for managing games and users. The API includes features such as user authentication, game management, and dashboard analytics. It leverages MongoDB for data storage and Mongoose for data modeling. The application is designed to be easily deployable on cloud platforms like Vercel and AWS.',
    techs: ['node', 'Typescript', 'NestJS', 'MongoDB', 'Mongoose', 'Render'],
    api: true,
  },
  {
    id: 3,
    image: [{ id: 1, url: AnimeManager }],
    title: 'Anime Manager',
    link: 'https://anime-manager-dev.netlify.app/',
    descricao:
      'Anime Manager é uma aplicação web dinâmica projetada para ajudar os entusiastas de anime a acompanhar seus shows favoritos. Com recursos como filtragem de animes por usuário, listagem de animes com fotos e contagem de episódios, e categorização por progresso, garante que você nunca perca o fio da meada da sua jornada de anime. Você também pode criar, atualizar e visualizar informações detalhadas sobre animes, tornando-o uma ferramenta abrangente para todos os amantes de anime.',
    description:
      'Anime Manager is a dynamic web application designed to help anime enthusiasts keep track of their favorite shows. With features like filtering animes by user, listing animes with photos and episode counts, and categorizing them by progress, it ensures you never lose track of your anime journey. You can also create, update, and view detailed anime information, making it a comprehensive tool for all anime lovers.',
    techs: [
      'React',
      'Redux',
      'Typescript',
      'Node.js',
      'Express',
      'MongoDB',
      'CSS',
      'HTML',
    ],
    api: false,
  },
  {
    id: 4,
    link: 'https://github.com/otavioaraujo08/anime-manager-api',
    title: 'Anime Manager API',
    descricao:
      'Anime Manager API é uma aplicação de servidor construída usando o framework Express. Ela fornece um backend robusto e escalável para gerenciar animes e usuários. A API inclui recursos como autenticação de usuários, gerenciamento de animes e análises de dashboard. Utiliza MongoDB para armazenamento de dados e Mongoose para modelagem de dados. A aplicação é projetada para ser facilmente implantada em plataformas de nuvem como Vercel e AWS.',
    description:
      'Anime Manager API is a server-side application built using the Express framework. It provides a robust and scalable backend for managing animes and users. The API includes features such as user authentication, anime management, and dashboard analytics. It leverages MongoDB for data storage and Mongoose for data modeling. The application is designed to be easily deployable on cloud platforms like Vercel and AWS.',
    techs: ['node', 'Typescript', 'Express', 'MongoDB', 'Mongoose', 'Render'],
    api: true,
  },
  {
    id: 5,
    image: [{ id: 1, url: pokeApiImage }],
    title: 'Pokedex React',
    link: 'https://poke-react-mon.netlify.app/',
    descricao:
      "O projeto 'pokemom-api-react' é uma aplicação web desenvolvida em React que utiliza a API PokeApi para exibir estatísticas dos Pokémons. A aplicação permite buscar Pokémons pelo nome, visualizar todos os Pokémons da primeira geração e obter informações detalhadas como HP, Dano, Defesa e Velocidade, além de mostrar o tipo e os movimentos de cada Pokémon.",
    description:
      "The 'pokemom-api-react' project is a web application developed in React that uses the PokeApi API to display Pokémon statistics. The application allows you to search for Pokémon by name, view all Pokémon from the first generation, and get detailed information such as HP, Damage, Defense, and Speed, as well as show the type and moves of each Pokémon.",
    api: false,
    techs: [
      'React',
      'JavaScript',
      'Axios',
      'HTML',
      'CSS',
      'Material UI',
      'PokeApi',
    ],
  },
];
