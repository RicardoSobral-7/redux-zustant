import { Provider as ReduxProvider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

export function App() {
  return (
    // o provider tipo do context para compartilhar  as informações agora dentro dos componentes podemos importar uma função chamada useSelector
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
