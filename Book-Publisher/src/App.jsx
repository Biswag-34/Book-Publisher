import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import BookList from './components/BookList';
import Store from './components/Store';
import Authors from './components/Authors';
import Testimonials from './components/Testimonials';
import LatestReleases from './components/LatestReleases';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LatestAuthor from './components/LatestAuthor';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <AboutSection />
      <BookList />
      <Store />
      <Authors />
      <Testimonials />
      <LatestReleases />
      <LatestAuthor />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
