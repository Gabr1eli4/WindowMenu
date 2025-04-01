import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import { Menu } from '@tauri-apps/api/menu';

import '@/assets/style/Index.scss';

const menu = await Menu.new({
  items: [
    {
      id: 'file',
      text: 'File',
      action: () => {
        console.log('quit pressed');
      },
      items: [
        {
          id: 'newFile',
          text: 'New File',
          action: () => {
            console.log('quit pressed');
          },
        },
        {
          id: 'createFile',
          text: 'Create File',
          action: () => {
            console.log('quit pressed');
          },
        },
        {
          id: 'openFile',
          text: 'Open File',
          action: () => {
            console.log('quit pressed');
          },
        },
        {
          id: 'openRecent',
          text: 'Open Recent',
          action: () => {
            console.log('quit pressed');
          },
          items: [
            {
              id: 'more',
              text: 'More',
              action: () => {
                console.log('quit pressed');
              },
            },
          ],
        },
      ],
    },
    {
      id: 'edit',
      text: 'Edit',
      action: () => {
        console.log('edit pressed');
      },
      items: [
        {
          id: 'editUndo',
          text: 'Undo',
          action: () => {
            console.log('Undo pressed');
          },
        },
        {
          id: 'editRedo',
          text: 'Redo',
          action: () => {
            console.log('Redo pressed');
          },
        },
        {
          id: 'editCut',
          text: 'Cut',
          action: () => {
            console.log('Cut pressed');
          },
        },
        {
          id: 'editCopy',
          text: 'Copy',
          action: () => {
            console.log('Copy pressed');
          },
        },
        {
          id: 'editFind',
          text: 'Find',
          action: () => {
            console.log('Find pressed');
          },
        },
        {
          id: 'editReplace',
          text: 'Replace',
          action: () => {
            console.log('Replace pressed');
          },
        },
      ],
    },
    {
      id: 'help',
      text: 'Help',
      action: () => {
        console.log('help pressed');
      },
      items: [
        {
          id: 'helpWelcome',
          text: 'Welcome',
          action: () => {
            console.log('Welcome pressed');
          },
        },
        {
          id: 'helpDocumentation',
          text: 'Documentation',
          action: () => {
            console.log('Documentation pressed');
          },
        },
        {
          id: 'helpAbout',
          text: 'About',
          action: () => {
            console.log('About pressed');
          },
        },
        {
          id: 'helpLicense',
          text: 'License',
          action: () => {
            console.log('License pressed');
          },
        },
      ],
    },
    {
      id: 'view',
      text: 'View',
      action: () => {
        console.log('view pressed');
      },
      items: [
        {
          id: 'viewAppearance',
          text: 'Appearance',
          action: () => {
            console.log('Appearance pressed');
          },
          items: [
            {
              id: 'viewAppearanceFullScreen',
              text: 'Full Screen',
              action: () => {
                console.log('Full Screen pressed');
              },
            },
            {
              id: 'viewAppearanceZenMode',
              text: 'Zen Mode',
              action: () => {
                console.log('Zen Mode pressed');
              },
            },
            {
              id: 'viewAppearanceCenteredLayout',
              text: 'Centered Layout',
              action: () => {
                console.log('Centered Layout pressed');
              },
            },
            {
              id: 'viewAppearanceActivityBarPosition',
              text: 'Activity Bar Position',
              action: () => {
                console.log('Activity Bar Position pressed');
              },
              items: [
                {
                  id: 'viewAppearanceActivityBarPositionTop',
                  text: 'Top',
                  action: () => {
                    console.log('Top pressed');
                  },
                },
                {
                  id: 'viewAppearanceActivityBarPositionLeft',
                  text: 'Left',
                  action: () => {
                    console.log('Left pressed');
                  },
                },
                {
                  id: 'viewAppearanceActivityBarPositionRight',
                  text: 'Right',
                  action: () => {
                    console.log('Right pressed');
                  },
                },
                {
                  id: 'viewAppearanceActivityBarPositionBottom',
                  text: 'Bottom',
                  action: () => {
                    console.log('Bottom pressed');
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'viewLayout',
          text: 'Layout',
          action: () => {
            console.log('Layout pressed');
          },
          items: [
            {
              id: 'viewLayoutSplitUp',
              text: 'Split Up',
              action: () => {
                console.log('Split Up pressed');
              },
            },
            {
              id: 'viewLayoutSplitDown',
              text: 'Split Down',
              action: () => {
                console.log('Split Down pressed');
              },
            },
            {
              id: 'viewLayoutSplitLeft',
              text: 'Split Left',
              action: () => {
                console.log('Split Left pressed');
              },
            },
            {
              id: 'viewLayoutSplitRight',
              text: 'Split Right',
              action: () => {
                console.log('Split Right pressed');
              },
            },
          ],
        },
      ],
    },
  ],
});

// If a window was not created with an explicit menu or had one set explicitly,
// this menu will be assigned to it.
menu.setAsAppMenu().then((res) => {
  console.log('menu set success', res);
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
