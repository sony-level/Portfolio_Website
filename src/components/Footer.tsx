import AIChatButton from "./AIChatButton";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-0 w-full bg-white">
      <AIChatButton />
      <ScrollToTop />
    </footer>
  );
}