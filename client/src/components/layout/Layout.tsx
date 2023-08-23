import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
