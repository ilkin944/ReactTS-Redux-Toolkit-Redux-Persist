import { useMemo } from 'react';

function App() {

  let a = 5;
  let b = 10

  const vurmaNeticesi = useMemo(() => {
    return a * b
  }, [a, b])


  return (
    <>

    </>

  );
}

export default App;