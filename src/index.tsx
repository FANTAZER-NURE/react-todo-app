import { createRoot } from 'react-dom/client';

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';
import './styles/todo-items.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Todos } from './componets/Todos';
import { TodosProvider } from './componets/TodosContext';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <TodosProvider>
    <HashRouter>
      <Routes>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="/" element={<App />}>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />

          <Route index element={<Todos />} />
          <Route path=":filter" element={<Todos />} />
        </Route>
      </Routes>
    </HashRouter>
  </TodosProvider>,

);
