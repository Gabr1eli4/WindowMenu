import type { TChartData, TChartDataValue } from '@/types/chart';

import { create } from 'zustand';

interface IExperimentState {
  chartData: TChartData;
  actions: {
    appendChartData: (data: TChartDataValue) => void;
    clearChartData: () => void;
  };
}

export const useExperiment = create<IExperimentState>()((set) => ({
  chartData: [],
  actions: {
    appendChartData: (data: TChartDataValue) =>
      set((state) => ({ chartData: [...state.chartData, data] })),
    clearChartData: () => set(() => ({ chartData: [] })),
  },
}));

export const useExperimentActions = () => useExperiment((state) => state.actions);
export const useExperimentChartData = () => useExperiment((state) => state.chartData);
