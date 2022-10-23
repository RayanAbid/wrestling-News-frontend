import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

// import Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/reducers/reducer";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  blacklist: [
    "pedningActions",
    "setSingleUserData",
    "PreviewPost",
    "SavePreviewPost",
    "GetWishlist",
  ],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
