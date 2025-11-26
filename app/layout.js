import "./globals.css";
// import Navbar from "../components/Navbar";
import Navbar from '../component/Navbar'
import { AuthProvider } from "@/component/Context/AuthProvider";

export const metadata = {
  title: "Event Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#55efc4]  min-h-screen">
        <div className="max-w-7xl mx-auto">
                <AuthProvider>
                   <Navbar/>
                  <main className="p-4">{children}</main>
        </AuthProvider>
        </div>
      
      </body>
    </html>
  );
}
