'use client'

import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddEventPage() {
  const [form, setForm] = useState({
    title: '',
    shortDescription: '',
    description: '',
    price: '',
    date: '',
    image: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      toast.success('Event added successfully!')
      setForm({ title: '', shortDescription: '', description: '', price: '', date: '', image: '' })
    } catch (err) {
      toast.error('Failed to add event: ' + err.message)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ToastContainer position="top-right" />
      <h1 className="text-3xl font-bold mb-6">Add New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="shortDescription" placeholder="Short Description" value={form.shortDescription} onChange={handleChange} required className="w-full p-2 border rounded" />
        <textarea name="description" placeholder="Full Description" value={form.description} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="image" placeholder="Image URL (optional)" value={form.image} onChange={handleChange} className="w-full p-2 border rounded" />

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
