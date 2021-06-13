import '../design/Design.css';
import Header from "../components/Header";
import BestDeal from "../components/BestDeal";
import Products from "../components/Products";
import AboutUs from "../components/AboutUs";
import ShoutOut from "../components/ShoutOut";
import Footer from "../components/Footer";



const HomePage = () => {
    return (
        <div class="home">
            <Header />
            <BestDeal />
            <Products />
            <AboutUs />
            <ShoutOut />
            <Footer />
        </div>
    );
}

export default HomePage;