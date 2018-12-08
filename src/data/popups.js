const popups = [
  {
    title: 'Warning',
    image_url: 'warning-icon.png',
    message: ["You can't run forever"],
    links: null,
    button_text: 'Abort',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Error',
    image_url: 'error-icon.png',
    message: ['Control panel not found.', 'Nevermind. Control is an illusion.'],
    links: null,
    button_text: 'Cancel',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Failure to open',
    image_url: 'error-icon.png',
    message: ['Link is dead.', 'All life is transient.'],
    links: null,
    button_text: 'OK',
    isOpen: false,
    isSelected: false
  },
  {
    title: 'Contact',
    image_url: 'profile-pic.png',
    message: 'test',
    links: [
      {
        text: 'Github',
        url: 'https://github.com/stmoreau'
      },
      {
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/stefmoreau/'
      },
      {
        text: 'Email',
        url: 'mailto:stephane.moreau.personal@gmail?subject=hello Stephane'
      }
    ],
    isOpen: true,
    isSelected: false,
    isContact: true
  }
];

export default popups;
