import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout";
import TodayTasks from "./pages/todayTasks";
import ImportedTasks from "./pages/importedTasks";
import CompletedTasks from "./pages/completedTasks";
import AllTasks from "./pages/allTasks";
import Addnewtask from "./pages/addnewtask";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <TodayTasks></TodayTasks>
      },
      {
        path: 'imported/',
        element: <ImportedTasks></ImportedTasks>
      },
      {
        path: 'completed/',
        element: <CompletedTasks></CompletedTasks>
      },
      {
        path: 'add/',
        element: <Addnewtask></Addnewtask>
      },
      {
        path: 'task/',
        element: <AllTasks></AllTasks>
      },
    ]
  }
]);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router}>

        </RouterProvider>
      </div>
  );
}

export default App;
