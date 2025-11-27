"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// ⭐ detectCategory function
const detectCategory = (title) => {
  if (!title) return "General";
  const lower = title.toLowerCase();
  if (lower.includes("wedding")) return "Wedding";
  if (lower.includes("tech")) return "Corporate";
  if (lower.includes("corporate")) return "Corporate";
  if (lower.includes("birthday")) return "Birthday";
  if (lower.includes("music")) return "Music";
  return "General";
};

export default function ItemsPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(""); // dropdown value

  // ⭐ Fetch events + auto category
  useEffect(() => {
    fetch("https://event-management-server-psi.vercel.app/events")
      .then(res => res.json())
      .then(data => {
        const updated = data.map(event => ({
          ...event,
          category: detectCategory(event.title) // auto assign category
        }));
        setEvents(updated);
      });
  }, []);

  // ⭐ Filter by search + category
  const filtered = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || event.category === category)
  );

  return (
    <div className="container bg-gray-100 mx-auto px-4 py-10">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-2">All Events</h1>
      <p className="text-gray-600 mb-6">
        Browse our latest event packages
      </p>

      {/* Search + Category */}
      <div className="flex gap-4 mb-6">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search events..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate">Corporate</option>
          <option value="Birthday">Birthday</option>
          <option value="Music">Music</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(event => (
          <div key={event._id} className="bg-white rounded shadow p-4">
            <img
              src={event.image}
              className="h-40 w-full object-cover rounded"
              alt={event.title}
            />
            <h2 className="text-xl font-semibold mt-3">
              {event.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {event.description}
            </p>
            <p className="font-semibold text-blue-600 mt-2">
              Price: ${event.price}
            </p>

            <Link href={`/event/${event._id}`}>
              <button className="mt-3 bg-blue-500 text-white p-2 rounded w-full">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
