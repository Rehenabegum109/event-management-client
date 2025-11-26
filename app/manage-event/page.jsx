'use client'

import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ManageProductsPage() {
  const [user, setUser] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editProduct, setEditProduct] = useState(null)
  const [viewProduct, setViewProduct] = useState(null)

  // Check login
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      window.location.href = '/login' // redirect if not logged in
    } else {
      setUser({ token })
    }
  }, [])

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:5000/events')
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    } catch (err) {
      toast.error('Failed to fetch products: ' + err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return
    try {
      const res = await fetch(`http://localhost:5000/events/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      toast.success('Product deleted successfully!')
      setProducts(products.filter((p) => p._id !== id))
    } catch (err) {
      toast.error('Error deleting product: ' + err.message)
    }
  }

  // Edit form change
  const handleEditChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value })
  }

  // Submit edited product
  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:5000/events/${editProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editProduct),
      })
      if (!res.ok) throw new Error('Failed to update')
      toast.success('Product updated successfully!')
      setEditProduct(null)
      fetchProducts()
    } catch (err) {
      toast.error(err.message)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ToastContainer position="top-right" />
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{p.title}</td>
                  <td className="border px-4 py-2">{p.price}</td>
                  <td className="border px-4 py-2">{p.date}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button
                      onClick={() => setViewProduct(p)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => setEditProduct(p)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View Modal */}
      {viewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full relative">
            <h2 className="text-xl font-bold mb-2">{viewProduct.title}</h2>
            <p className="mb-1"><strong>Short Description:</strong> {viewProduct.shortDescription}</p>
            <p className="mb-1"><strong>Description:</strong> {viewProduct.description}</p>
            <p className="mb-1"><strong>Price:</strong> {viewProduct.price}</p>
            <p className="mb-1"><strong>Date:</strong> {viewProduct.date}</p>
            {viewProduct.image && <img src={viewProduct.image} alt={viewProduct.title} className="my-2 w-full rounded" />}
            <button onClick={() => setViewProduct(null)} className="mt-3 px-4 py-2 bg-gray-400 text-white rounded">Close</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Event</h2>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input type="text" name="title" value={editProduct.title} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <input type="text" name="shortDescription" value={editProduct.shortDescription} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <textarea name="description" value={editProduct.description} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <input type="number" name="price" value={editProduct.price} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <input type="date" name="date" value={editProduct.date} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <input type="text" name="image" value={editProduct.image} onChange={handleEditChange} className="w-full p-2 border rounded" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setEditProduct(null)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
