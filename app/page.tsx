import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedTours from "./components/FeaturedTours";
import Destinations from "./components/Destinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import TravelBlog from "./components/TravelBlog";

export default function Home() {
  return (
    <main className= "home">

       
          <Hero />
          <FeaturedTours />
          <Destinations />
          <WhyChooseUs />
          <Testimonials />
          <TravelBlog />
     
 
    </main>
  );
}
