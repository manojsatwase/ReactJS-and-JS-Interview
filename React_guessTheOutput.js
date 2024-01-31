export default const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log(count); ///current value count
  };

  return (
    <>
      <h1>React Hooks {count}</h1>
      <button onClick={increaseCount}>count</button>
    </>
  );
};