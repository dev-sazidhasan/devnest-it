import Navbar from "./components/Navbar";
import Hero from "./home/Hero";
import About from "./home/About";
import Services from "./home/Services";
import Portfolio from "./home/Portfolio";
import Contact from "./home/Contact";
import Footer from "./home/Footer";
import Developer from "./home/Developer";

export default function HomePage() {
    return (
        <main className="bg-gray-900 text-gray-200 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Developer/>
            <Contact />
            <Footer />
        </main>
    );
}
