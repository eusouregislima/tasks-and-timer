import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { ToDoList } from './pages/ToDoList'
import { ToDo } from './pages/Todo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ToDo />} />
        <Route path="/history" element={<History />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Route>
    </Routes>
  )
}
