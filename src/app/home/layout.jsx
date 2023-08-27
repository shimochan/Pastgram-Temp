import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
}
