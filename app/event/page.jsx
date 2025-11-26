"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ItemsPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://event-management-server-9qykegjhv-rehenas-projects-7754e927.vercel.app/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const filtered = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
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
        <input
          type="text"
          placeholder="Search events..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border p-2 rounded">
          <option disabled selected>Category</option>
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Birthday</option>
          <option>Music</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(event => (
          <div key={event._id} className="bg-white rounded shadow p-4">
            <img
              src={event.image}
              className="h-40 w-full object-cover rounded"
              alt=""
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
