import { ReactNode } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <main style = {{minHeight: '80vh'}}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
