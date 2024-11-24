import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './style.scss';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const GlobalStyle: React.FC<Props> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyle;
