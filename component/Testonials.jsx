import React from 'react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Rehena', city: 'Dhaka', message: 'EventHub service is amazing! Our wedding became unforgettable.' },
    { name: 'Abdul', city: 'Chittagong', message: 'Our corporate meeting was perfectly organized and successful.' },
    { name: 'Mahmuda', city: 'Sylhet', message: 'The kids’ birthday party was fun and memorable.' },
  ]
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <p className="text-gray-600">Feedback from our valued clients.</p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <p className="text-gray-600 mb-4">“{t.message}”</p>
            <h3 className="font-semibold">{t.name}</h3>
            <span className="text-gray-400 text-sm">{t.city}, Bangladesh</span>
          </div>
        ))}
      </div>
    </section>
  )
}
