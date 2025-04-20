import { Menu } from '@tauri-apps/api/menu';
import { TMenuItem } from '@/types/menu';
import { create } from 'zustand';

interface IMenuStore {
  menu: Array<TMenuItem>;
  windowMenu: Menu;
  chosenMenu: string;
  actions: {
    setMenu: (menu: Array<TMenuItem>) => void;
    setChosenMenu: (chosenMenu: string) => void;
    setWindowMenu: (windowMenu: Menu) => void;
  };
}

export const useMenuStore = create<IMenuStore>()((set) => ({
  menu: [
    {
      name: 'New File',
      value: 'fileNew',
      depth: 2,
    },
    {
      name: 'Create File',
      value: 'fileCreate',
      depth: 2,
    },
    {
      name: 'Open File',
      value: 'fileOpen',
      depth: 2,
    },
    {
      name: 'More',
      value: 'fileRecentMore',
      depth: 3,
    },
    {
      name: 'Undo',
      value: 'editUndo',
      depth: 2,
    },
    {
      name: 'Redo',
      value: 'editRedo',
      depth: 2,
    },
    {
      name: 'Cut',
      value: 'editCut',
      depth: 2,
    },
    {
      name: 'Copy',
      value: 'editCopy',
      depth: 2,
    },
    {
      name: 'Find',
      value: 'editFind',
      depth: 2,
    },
    {
      name: 'Replace',
      value: 'editReplace',
      depth: 2,
    },
    {
      name: 'Welcome',
      value: 'helpWelcome',
      depth: 2,
    },
    {
      name: 'Documentation',
      value: 'helpDocumentation',
      depth: 2,
    },
    {
      name: 'About',
      value: 'helpAbout',
      depth: 2,
    },
    {
      name: 'License',
      value: 'helpLicense',
      depth: 2,
    },
    {
      name: 'Full Screen',
      value: 'viewApperanceFullScreen',
      depth: 3,
    },
    {
      name: 'Zen Mode',
      value: 'viewApperanceZenMode',
      depth: 3,
    },
    {
      name: 'Centered Layout',
      value: 'viewApperanceCenteredLayout',
      depth: 3,
    },
    {
      name: 'Top',
      value: 'viewAppearanceActivityBarPositionTop',
      depth: 4,
    },
    {
      name: 'Left',
      value: 'viewAppearanceActivityBarPositionLeft',
      depth: 4,
    },
    {
      name: 'Right',
      value: 'viewAppearanceActivityBarPositionRight',
      depth: 4,
    },
    {
      name: 'Bottom',
      value: 'viewAppearanceActivityBarPositionBottom',
      depth: 4,
    },
    {
      name: 'Split Up',
      value: 'viewLayoutSplitUp',
      depth: 3,
    },
    {
      name: 'Split Down',
      value: 'viewLayoutSplitDown',
      depth: 3,
    },
    {
      name: 'Split Left',
      value: 'viewLayoutSplitLeft',
      depth: 3,
    },
    {
      name: 'Split Right',
      value: 'viewLayoutSplitRight',
      depth: 3,
    },
  ],
  chosenMenu: '',
  windowMenu: {} as Menu,
  actions: {
    setMenu: (menu) => set({ menu }),
    setChosenMenu: (chosenMenu) => set({ chosenMenu }),
    setWindowMenu: (windowMenu) => set({ windowMenu }),
  },
}));

export const useMenuActions = () => useMenuStore((state) => state.actions);

export const useMenu = () => useMenuStore((state) => state.menu);
export const useChosenMenu = () => useMenuStore((state) => state.chosenMenu);
export const useWindowMenu = () => useMenuStore((state) => state.windowMenu);
