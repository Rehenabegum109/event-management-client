
"use client";


const teamMembers = [
  {
    name: "Rehena",
    role: "Developer & Organizer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Rehena develops the platform, manages the event workflow, and ensures smooth operations.",
    friendly: 5
  },
  {
    name: "Ayesha",
    role: "Event Coordinator",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Ayesha coordinates events and schedules, making everything organized and friendly for users.",
    friendly: 4
  },
  {
    name: "Rafi",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Rafi creates intuitive UI/UX, ensuring even non-technical users can navigate easily.",
    friendly: 4
  },
  {
    name: "Tanvir",
    role: "Marketing & Promotion",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    description: "Tanvir promotes events and engages users, ensuring everyone can access information easily.",
    friendly: 4
  },
];

const eventServices = [
  { name: "Workshops & Training", icon: "https://img.icons8.com/fluency/48/000000/classroom.png" },
  { name: "Concerts & Performances", icon: "https://img.icons8.com/fluency/48/000000/musical-notes.png" },
  { name: "Community & Social Events", icon: "https://img.icons8.com/fluency/48/000000/group.png" },
  { name: "Conferences & Seminars", icon: "https://img.icons8.com/fluency/48/000000/conference-call.png" },
  { name: "Custom Events", icon: "https://img.icons8.com/fluency/48/000000/idea.png" },
  { name: "Weddings & Celebrations", icon: "https://img.icons8.com/fluency/48/000000/wedding.png" },
  { name: "Corporate Events", icon: "https://img.icons8.com/fluency/48/000000/briefcase.png" },
  { name: "Virtual Events", icon: "https://img.icons8.com/fluency/48/000000/laptop.png" },
];

export default function TeamAndServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
     

      <main className="flex-grow">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold">Where Every Moment Becomes Unforgettable</h1>
            <p className="text-gray-700 text-lg">
              We manage, organize, and promote events professionally with care and friendliness.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
              alt="Event Illustration"
              className="w-full rounded shadow-lg"
            />
          </div>
        </section>

        {/* Team Members */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-blue-500 hover:scale-110 transition transform duration-500"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 mb-1">{member.role}</p>
                  <p className="text-gray-600 mb-2 text-sm">{member.description}</p>
                  <p className="mb-2">
                    {Array.from({ length: member.friendly }).map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Services */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Event Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventServices.map((service) => (
              <div key={service.name} className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105">
                <img src={service.icon} alt={service.name} className="w-16 h-16 mb-4"/>
                <h3 className="text-xl font-semibold text-center">{service.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </div>
  );
}
