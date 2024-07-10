import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster} from 'sonner';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
