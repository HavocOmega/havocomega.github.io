// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HavocOmega', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['HavocOmega/HavocOmega', 'HavocOmega/self-balancing-robot'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Some arm wrestling game',
          description:
            'Small weekend project I created in 2021. Overall performed well with 250k+ visits acquired',
          imageUrl:
            'https://tr.rbxcdn.com/180DAY-448df3218e9f0e08bceb0a0e59cdcc39/352/352/Image/Png/noFilter',
          link: 'https://www.roblox.com/games/4801448746/UPDATE-Some-arm-wrestling-game',
        }
      ],
    },
  },
  seo: {
    title: 'HavocOmega Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: 'HavocOmega',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'havocomega.business@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Lua',
    'LuaU',
    'C#',
    'Python',
    'Java',
    'Roblox Studio',
    'Unity',
    'Godot',
    'Blender'
    ],
  experiences: [
    {
      company: 'UNDISCLOSED PROJECT',
      position: 'Junior Programmer',
      from: 'April 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'some arm wrestling game',
      position: 'Lead Developer',
      from: 'July 2021',
      to: 'July 2021',
      companyLink: 'https://www.roblox.com/games/4801448746/UPDATE-Some-arm-wrestling-game',
    },
    {
      company: 'Grilla',
      position: 'Gameplay Programmer',
      from: 'February 2020',
      to: 'February 2020',
      companyLink: 'https://www.roblox.com/games/4650856084/GRILLA-BETA',
    },
    {
      company: 'Iconic Gaming LLC',
      position: 'Manager',
      from: '2019',
      to: '2021',
      companyLink: 'https://www.roblox.com/communities/6941808/Iconic-Gaming-Studios#!/about',
    },
  ],
  certifications: [],
  educations: [],
  publications: [
    {
      title: 'Radial Building Tool | Shortcuts for building',
      conferenceName: '',
      journalName: '',
      authors: 'HavocOmega',
      link: 'https://devforum.roblox.com/t/radial-building-tool-shortcuts-for-building/907688',
      description:
        'A powerful and customizable Radial Menu Plugin for Roblox Studio, inspired by Blender\'s efficient radial menu system. This plugin aims to streamline the developer workflow by providing quick access to essential tools and actions through an intuitive radial interface.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
