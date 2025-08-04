import { useisOnline } from './hooks/useIsOnline';

function App() {
  const isOnline = useisOnline();
  if (isOnline) {
    return "You are online yay!"
  }

  return "You are offline, please connect to the internet"
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App