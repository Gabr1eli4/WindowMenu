import type { MenuItemOptions } from '@tauri-apps/api/menu';

import { useMenuActions } from '@/store/menu';
import { Menu } from '@tauri-apps/api/menu';
import { useRef } from 'react';

export async function useMenu() {
  const { setChosenMenu, setWindowMenu } = useMenuActions();
  const buttonElement = document.createElement('button');
  const buttonRef = useRef<HTMLButtonElement>(buttonElement);

  const action: MenuItemOptions['action'] = (id) => {
    console.log(`${id} pressed`);
    setChosenMenu(id);
    buttonRef?.current.click();
  };

  const menu = await Menu.new({
    items: [
      {
        id: 'file',
        text: 'File',
        action,
        items: [
          {
            id: 'newFile',
            text: 'New File',
            action,
          },
          {
            id: 'createFile',
            text: 'Create File',
            action,
          },
          {
            id: 'openFile',
            text: 'Open File',
            action,
          },
          {
            id: 'openRecent',
            text: 'Open Recent',
            action,
            items: [
              {
                id: 'more',
                text: 'More',
                action,
              },
            ],
          },
        ],
      },
      {
        id: 'edit',
        text: 'Edit',
        action,
        items: [
          {
            id: 'editUndo',
            text: 'Undo',
            action,
          },
          {
            id: 'editRedo',
            text: 'Redo',
            action,
          },
          {
            id: 'editCut',
            text: 'Cut',
            action,
          },
          {
            id: 'editCopy',
            text: 'Copy',
            action,
          },
          {
            id: 'editFind',
            text: 'Find',
            action,
          },
          {
            id: 'editReplace',
            text: 'Replace',
            action,
          },
        ],
      },
      {
        id: 'help',
        text: 'Help',
        action,
        items: [
          {
            id: 'helpWelcome',
            text: 'Welcome',
            action,
          },
          {
            id: 'helpDocumentation',
            text: 'Documentation',
            action,
          },
          {
            id: 'helpAbout',
            text: 'About',
            action,
          },
          {
            id: 'helpLicense',
            text: 'License',
            action,
          },
        ],
      },
      {
        id: 'view',
        text: 'View',
        action,
        items: [
          {
            id: 'viewAppearance',
            text: 'Appearance',
            action,
            items: [
              {
                id: 'viewAppearanceFullScreen',
                text: 'Full Screen',
                action,
              },
              {
                id: 'viewAppearanceZenMode',
                text: 'Zen Mode',
                action,
              },
              {
                id: 'viewAppearanceCenteredLayout',
                text: 'Centered Layout',
                action,
              },
              {
                id: 'viewAppearanceActivityBarPosition',
                text: 'Activity Bar Position',
                action,
                items: [
                  {
                    id: 'viewAppearanceActivityBarPositionTop',
                    text: 'Top',
                    action,
                  },
                  {
                    id: 'viewAppearanceActivityBarPositionLeft',
                    text: 'Left',
                    action,
                  },
                  {
                    id: 'viewAppearanceActivityBarPositionRight',
                    text: 'Right',
                    action,
                  },
                  {
                    id: 'viewAppearanceActivityBarPositionBottom',
                    text: 'Bottom',
                    action,
                  },
                ],
              },
            ],
          },
          {
            id: 'viewLayout',
            text: 'Layout',
            action,
            items: [
              {
                id: 'viewLayoutSplitUp',
                text: 'Split Up',
                action,
              },
              {
                id: 'viewLayoutSplitDown',
                text: 'Split Down',
                action,
              },
              {
                id: 'viewLayoutSplitLeft',
                text: 'Split Left',
                action,
              },
              {
                id: 'viewLayoutSplitRight',
                text: 'Split Right',
                action,
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

  setWindowMenu(menu);

  return buttonRef;
}
