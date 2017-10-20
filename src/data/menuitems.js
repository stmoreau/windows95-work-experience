const menuItems = [
  {
    title: 'Settings',
    image_url: 'settings-icon.png',
    onClick: false,
    onMouseOut: true,
    onMouseOver: true,
    isSubmenu: false,
    popup: null,
    items: [
      {
        title: 'Control Panel',
        image_url: 'controlpanel-icon.png',
        onClick: true,
        onMouseOut: false,
        onMouseOver: false,
        isSubmenu: true,
        popup: {
          title: 'Error'
        },
        items: null
      }
    ]
  },
  {
    title: 'Contact',
    image_url: 'contact-icon.png',
    onClick: true,
    onMouseOut: false,
    onMouseOver: false,
    isSubmenu: false,
    popup: {
      title: 'Contact'
    },
    items: null
  },
  {
    title: 'Run...',
    image_url: 'run-icon.png',
    onClick: true,
    onMouseOut: false,
    onMouseOver: false,
    isSubmenu: false,
    popup: {
      title: 'Warning'
    },
    items: null
  }
];

export default menuItems;
