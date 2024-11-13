import Header from './Header';
import Footer from './Footer';
type Props = {
    children: React.ReactNode;
};
function DefaultLayout({ children }: Props) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
