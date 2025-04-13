import { TMenuItem } from '@/types/menu';
import { create } from 'zustand';

interface IMenuStore {
  menu: Array<TMenuItem>;
  chosenMenu: string;
  actions: {
    setMenu: (menu: Array<TMenuItem>) => void;
    setChosenMenu: (chosenMenu: string) => void;
  };
}

export const useMenuStore = create<IMenuStore>()((set) => ({
  menu: [
    {
      name: 'New File',
      value: 'newFile',
    },
    {
      name: 'Create File',
      value: 'createFile',
    },
    {
      name: 'Open File',
      value: 'openFile',
    },
    {
      name: 'Open Recent',
      value: 'openRecent',
    },
    {
      name: 'More',
      value: 'more',
    },
    {
      name: 'Undo',
      value: 'editUndo',
    },
    {
      name: 'Redo',
      value: 'editRedo',
    },
    {
      name: 'Cut',
      value: 'editCut',
    },
    {
      name: 'Copy',
      value: 'editCopy',
    },
    {
      name: 'Find',
      value: 'editFind',
    },
    {
      name: 'Replace',
      value: 'editReplace',
    },
    {
      name: 'Welcome',
      value: 'helpWelcome',
    },
    {
      name: 'Documentation',
      value: 'helpDocumentation',
    },
    {
      name: 'About',
      value: 'helpAbout',
    },
    {
      name: 'License',
      value: 'helpLicense',
    },
    {
      name: 'Full Screen',
      value: 'viewApperanceFullScreen',
    },
    {
      name: 'Zen Mode',
      value: 'viewApperanceZenMode',
    },
    {
      name: 'Centered Layout',
      value: 'viewApperanceCenteredLayout',
    },
    {
      name: 'Top',
      value: 'viewAppearanceActivityBarPositionTop',
    },
    {
      name: 'Left',
      value: 'viewAppearanceActivityBarPositionLeft',
    },
    {
      name: 'Right',
      value: 'viewAppearanceActivityBarPositionRight',
    },
    {
      name: 'Bottom',
      value: 'viewAppearanceActivityBarPositionBottom',
    },
    {
      name: 'Split Up',
      value: 'viewLayoutSplitUp',
    },
    {
      name: 'Split Down',
      value: 'viewLayoutSplitDown',
    },
    {
      name: 'Split Left',
      value: 'viewLayoutSplitLeft',
    },
    {
      name: 'Split Right',
      value: 'viewLayoutSplitRight',
    },
  ],
  chosenMenu: '',
  actions: {
    setMenu: (menu) => set({ menu }),
    setChosenMenu: (chosenMenu) => set({ chosenMenu }),
  },
}));

export const useMenuActions = () => useMenuStore((state) => state.actions);

export const useMenu = () => useMenuStore((state) => state.menu);
export const useChosenMenu = () => useMenuStore((state) => state.chosenMenu);
