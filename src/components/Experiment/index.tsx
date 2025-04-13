import type { TMenuItem } from '@/types/menu';

import { useMenu, useChosenMenu } from '@/store/menu';
import { useState } from 'react';

interface IExperimentProps {
  buttonRef: any;
}

export function Experiment({ buttonRef }: IExperimentProps) {
  const [menuItem, setMenuItem] = useState<TMenuItem>({} as TMenuItem);

  const chosenMenu = useChosenMenu();
  const menu = useMenu();

  const setMenuItemToClick = () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const _menuItem = menu[randomIndex];
    setMenuItem(_menuItem);
  };

  const handleStartExperiment = async () => {
    try {
      setMenuItemToClick();

      const startTime = Date.now();
      console.log('startTime ', startTime);
      await handleExperiment();
      const endTime = Date.now();
      console.log('endTime ', endTime);

      const diffTime = endTime - startTime;

      console.log('diffTime', diffTime);
    } catch (error) {
      console.log('error');
    } finally {
    }
  };

  // Компоненты графического интерфейса

  const handleExperiment = async () => {
    return new Promise((resolve) => {
      const handleContextMenu = () => {
        console.log('handleContextMenu');
        buttonRef.current?.addEventListener('onmenuclick', handleContextMenu);
        resolve(true);
      };
      buttonRef.current?.removeEventListener('onmenuclick', handleContextMenu);
    });
  };

  return (
    <div>
      <p>{menuItem.name}</p>
      <button onClick={handleStartExperiment}>Начать эксперимент</button>
    </div>
  );
}
