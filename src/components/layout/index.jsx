/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
