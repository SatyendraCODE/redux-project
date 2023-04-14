import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import { Provider } from 'react-redux';
import MainRoutes from './mainRoute';
import { RouterProvider} from "react-router-dom";
import CustomStore from "./CustomStore.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
        <RouterProvider router={MainRoutes} />
  </Provider>
);
