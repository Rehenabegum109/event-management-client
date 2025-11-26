import Contact from "@/component/contacts/contacts";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";


export const metadata = {
  title: "Contact Us - Event Management",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
     
     

      {/* Main content */}
      <main className="flex-grow">
        <Contact/>
      </main>

    </div>
  );
}
