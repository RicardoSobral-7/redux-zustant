import { configureStore, createSlice, Store } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, UseSelector } from "react-redux";

// propriedade importante para compartilhar informações entre todos os componentes da aplicação já para criar pedacinhos que serão compartilhados, ao colocar o slice, acessar o reducer o nome que dermos antes dos 2 pontos ira permanecer e nomealo
export const store = configureStore({
  reducer: {
  },
});

// para fazer a integração do react com redux precisa intalar o react-redux, pois ele pode ser usado em qualquer outro framework, como vue, angular e por isso precisamos instalar isso ai vamos até o nosso app e passamos para ele como se fosse um provider do context e um store, que é o que criamos a cima

// tipagem para o toda a aplicação, o getState ele retorna todo o estado, equando usamos o typeof passando o store.getState, ele pega toda a tipagem contida
// export type RootState = typeof store.getState
// porem o que queremos pegar na verdade é o retorno da função pois o getState é uma função
export type RootState = ReturnType<typeof store.getState>


// estamos ainda com bastante problemas de tipagens, agora para resolvermos um pouco disso vamo fazer o seguinte
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector