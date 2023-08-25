import Header from './Header';
import { Helmet } from "react-helmet";

const Layout = ({ children, title }: any) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>
        </div>
    );
};
Layout.defaultProps = {
    title: "ByteCode"
}
export default Layout;
