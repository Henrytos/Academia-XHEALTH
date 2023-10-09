import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Modalidades from "./pages/Modalidades";
import Depoimentos from "./pages/Depoimentos";
import Professores from "./pages/Professores";
import Modalidade from "./pages/Modalidade";
import Galery from "./components/Galery";
import Musculos from "./pages/Musculos";
import ListLocal from "./pages/ListLocal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/modalidades",
        element: <Modalidades />,
        children: [
          {
            index: true,
            path: "/modalidades",
            element: <Galery />,
          },
          {
            path: "/modalidades/:id",
            element: <Modalidade />,
          },
        ],
      },
      {
        path: "/depoimentos",
        element: <Depoimentos />,
      },
      {
        path: "/professores",
        element: <Professores />,
      },
      {
        path: "/locais",
        element: <ListLocal/>,
      },
      {
        path: "/musculos",
        element: <Musculos />,
      },
    ],
  },
]);

export default router;
