import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

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
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
