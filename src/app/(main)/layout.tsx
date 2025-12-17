import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BackToTopButton from "@/components/buttonback/BackToTopButton";
import ContactPage from "@/components/contact/Contact";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <ContactPage />
      <BackToTopButton />
      <Footer />
    </>
  );
}
