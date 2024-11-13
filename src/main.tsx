import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/scss/GlobalStyle.tsx';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.ts';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/layouts/Loading.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <GlobalStyle>
                    <App />
                </GlobalStyle>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
);
