import "./globals.css";
// import Navbar from "../components/Navbar";
import Navbar from '../component/Navbar'
import { AuthProvider } from "@/component/Context/AuthProvider";
import Footer from "@/component/Footer";

export const metadata = {
  title: "Event Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#55efc4] min-h-screen">
        <div className="max-w-7xl mx-auto">
                <AuthProvider>
                   <Navbar/>
                  <main>{children}</main>
                  <Footer/>
        </AuthProvider>
        
        </div>
      
      </body>
    </html>
  );
}
