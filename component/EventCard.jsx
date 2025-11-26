import React from 'react'

export default function EventCard() {
  const events = [
    { title: 'Royal Wedding 2025', desc: 'Premium planning and decoration for weddings.' },
    { title: 'Tech Summit Dhaka', desc: 'Modern planning for corporate tech conferences.' },
    { title: 'Summer Music Fest', desc: 'Great organization for live music concerts.' },
    { title: 'Kids Birthday Gala', desc: 'Theme-based birthday parties for kids.' },
  ]
  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Events</h2>
        <p className="text-gray-600">Latest and well-planned events.</p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((e, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
            <p className="text-gray-600">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
