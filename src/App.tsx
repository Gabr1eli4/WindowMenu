import { Experiment } from '@/components/Experiment';
import { Chart } from '@/components/Chart';
import { useMenu } from '@/hooks/useMenu';

function App() {
  const buttonRef = useMenu();

  return (
    <main className="container">
      <Experiment buttonRef={buttonRef} />
      <Chart />
    </main>
  );
}

export default App;
