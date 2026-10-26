import "./globals.css";
import "./globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Header />
        {children}
          
        <Footer />
     
      </body>
    </html>
  );
}
