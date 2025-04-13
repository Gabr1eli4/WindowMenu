import { Experiment } from '@/components/Experiment';
import { useMenu } from '@/hooks/useMenu';

function App() {
  const buttonRef = useMenu();

  return (
    <main className="container">
      <Experiment buttonRef={buttonRef} />
    </main>
  );
}

export default App;
