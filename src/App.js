import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import 'react-photo-view/dist/react-photo-view.css';



function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
