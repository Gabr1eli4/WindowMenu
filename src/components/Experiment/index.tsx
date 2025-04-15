import type { TMenuItem } from '@/types/menu';

import { useExperimentActions } from '@/store/experiment';
import { useMenu, useWindowMenu } from '@/store/menu';
import { useState } from 'react';
import { hicksLaw } from '@/utils';

interface IExperimentProps {
  buttonRef: Promise<React.MutableRefObject<HTMLButtonElement>>;
}

export function Experiment({ buttonRef }: IExperimentProps) {
  const { appendChartData, clearChartData } = useExperimentActions();
  const [menuItem, setMenuItem] = useState<TMenuItem | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const menu = useMenu();
  const windowMenu = useWindowMenu();
  console.log(windowMenu.rid);

  const setMenuItemToClick = () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const _menuItem = menu[randomIndex];
    setMenuItem(_menuItem);
  };

  const test = async () => {
    const items = await windowMenu.items();
    console.log(items);
  };

  test();

  const handleExperiment = async () => {
    return new Promise(async (resolve) => {
      const handleContextMenu = async () => {
        console.log('handleContextMenu');
        (await buttonRef).current?.removeEventListener('click', handleContextMenu);
        resolve(true);
      };
      (await buttonRef).current?.addEventListener('click', handleContextMenu);
    });
  };

  const handleStartExperiment = async () => {
    try {
      setIsDisabled(true);
      clearChartData();
      for (let i = 0; i < 10; i++) {
        setMenuItemToClick();

        const startTime = Date.now();
        await handleExperiment();
        const endTime = Date.now();
        const diffTime = endTime - startTime;
        appendChartData({ name: i.toString(), value: diffTime });

        console.log('diffTime', diffTime);
      }
      setMenuItem(null);
    } catch (error) {
      console.log('error');
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <p>{menuItem?.name}</p>
      <button onClick={handleStartExperiment} disabled={isDisabled}>
        Начать эксперимент
      </button>
    </div>
  );
}
