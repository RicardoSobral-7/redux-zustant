import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  // precisamos do dispatch para executar a função
  const dispatch = useDispatch()

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();
    // a baixo fazemos o dispatch fazemos ações, ou como função mais a função que exportamos do nosso slice, ele também pode ser um objeto, pode ser qualquer coisa na verdade
    dispatch(add({
      newTodo
    }))

    setNewTodo('')
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="novo to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
