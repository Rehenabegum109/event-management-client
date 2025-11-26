// app/components/Features.jsx
import React from 'react'

export default function Features() {
  const features = [
    { title: 'Wedding Planner Pro', desc: 'Every moment of the wedding planned and memorable.', img:'/hero2.jpg' },
    { title: 'Corporate Event Expert', desc: 'Perfect planning for corporate meetings and conferences.', img: '/features.avif' },
    { title: 'Birthday Party Magic', desc: 'Fun and unforgettable birthday party planning.', img: '/features2.avif' },
    { title: 'Live Show Organizer', desc: 'Experience in organizing concerts and live shows.', img: '/features3.webp' },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <p className="text-gray-600">We are ready for all types of events.</p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <img src={f.img} alt={f.title} className="h-48 w-full object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
