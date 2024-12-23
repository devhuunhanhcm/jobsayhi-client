import Header from './Header';
import Footer from './Footer';
type Props = {
    children: React.ReactNode;
};
function DefaultLayout({ children }: Props) {
    return (
        <main id="main">
            <Header />
            <div>{children}</div>
            <Footer />
        </main>
    );
}

export default DefaultLayout;
