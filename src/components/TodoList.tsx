import { useAppSelector } from "../store";

export function TodoList() {
  // importado depois das configurações do "context" no app, a baixo temos a importação de todo os stores, ele vem em forma de objeto, o retorno pode retornar pedacinhos se abrirmos igual objeto da forma a baixo ele está retornando tudo
  const todos = useAppSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
