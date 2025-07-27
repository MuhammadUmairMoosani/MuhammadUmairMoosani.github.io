import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Body } from "./components/body";

export default function Home() {
  return (
    <div className="home wp-singular page-template page-template-elementor_header_footer page page-id-14 wp-custom-logo wp-theme-pixion tt-magic-cursor fancy-scrollbar elementor-default elementor-template-full-width elementor-kit-13 elementor-page elementor-page-14">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
