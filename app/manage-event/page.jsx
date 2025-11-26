"use client"

import { useEffect, useState } from "react"

export default function ManageProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState(null)
  const [viewingProduct, setViewingProduct] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: ""
  })

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => console.error("Fetch error:", err))
  }, [])

  // Delete product
  const handleDelete = (id) => {
    if (!confirm("Sure to delete?")) return
    fetch(`http://localhost:5000/events/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => setProducts(products.filter(p => (p._id ?? p.id) !== id)))
      .catch(err => console.error("Delete error:", err))
  }

  // Edit product
  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormData({
      title: product.title ?? "",
      description: product.description ?? "",
      price: product.price ?? "",
      image: product.image ?? ""
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Update product
  const handleUpdate = (e) => {
    e.preventDefault()
    if (!editingProduct) return alert("No product selected!")

    const productId = editingProduct._id ?? editingProduct.id
    if (!productId) return alert("Product ID not found!")

    fetch(`https://event-management-server-9qykegjhv-rehenas-projects-7754e927.vercel.app/events/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedProduct => {
        const updatedId = updatedProduct._id ?? updatedProduct.id
        setProducts(products.map(p => (p._id ?? p.id) === updatedId ? updatedProduct : p))
        setEditingProduct(null)
      })
      .catch(err => console.error("Update error:", err))
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse table-auto">
          <thead className="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 border-b">Image</th>
              <th className="py-3 px-4 border-b">Title</th>
              <th className="py-3 px-4 border-b">Description</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr
                key={product._id ?? product.id}
                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
              >
                <td className="py-2 px-4 border">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ) : "No Image"}
                </td>
                <td className="py-2 px-4 border">{product.title}</td>
                <td className="py-2 px-4 border">
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </td>
                <td className="py-2 px-4 border">{product.price}৳</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => setViewingProduct(product)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id ?? product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {viewingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">{viewingProduct.title}</h2>
            {viewingProduct.image && (
              <img
                src={viewingProduct.image}
                alt={viewingProduct.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            <p><strong>Description:</strong></p>
            <p className="mb-2">{viewingProduct.description}</p>
            <p><strong>Price:</strong> {viewingProduct.price}৳</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setViewingProduct(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded shadow-lg w-96"
          >
            <h2 className="text-xl font-bold mb-4">Edit Event</h2>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full mb-3 p-2 border rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full mb-3 p-2 border rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
