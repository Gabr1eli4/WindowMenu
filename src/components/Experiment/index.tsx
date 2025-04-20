import type { TMenuItem } from '@/types/menu';

import { useExperimentActions } from '@/store/experiment';
import { useMenu } from '@/store/menu';
import { hicksLaw } from '@/utils';
import { useState } from 'react';

interface IExperimentProps {
  buttonRef: Promise<React.MutableRefObject<HTMLButtonElement>>;
}

let depth: number | null = null;

export function Experiment({ buttonRef }: IExperimentProps) {
  const { appendChartData, clearChartData } = useExperimentActions();
  const [menuItem, setMenuItem] = useState<TMenuItem | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const menu = useMenu();

  const setMenuItemToClick = () => {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const _menuItem = menu[randomIndex];
    setMenuItem(_menuItem);
    depth = _menuItem.depth;
  };

  const handleExperiment = async () => {
    return new Promise(async (resolve) => {
      const handleContextMenu = async () => {
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
        if (depth) {
          const result = hicksLaw(depth);
          console.log('hick law value = ', result);
        }

        appendChartData({ name: i.toString(), value: diffTime });

        console.log('diffTime', diffTime);
      }
    } catch (error) {
      console.log('error');
    } finally {
      setIsDisabled(false);
      setMenuItem(null);
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
