"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const params = useParams();  // params.id
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`https://event-management-server-psi.vercel.app/events/${params.id}`)
      .then(res => res.json())
      .then(data => setEvent(data))
      .catch(err => console.error(err));
  }, [params.id]);

  if (!event) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
      <h1 className="text-4xl font-bold mt-6">{event.title}</h1>
      <p className="mt-2"><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price:</strong> {event.price} BDT</p>
      <p className="mt-6">{event.description}</p>
      <button onClick={() => history.back()} className="mt-8 px-5 py-2 bg-blue-600 text-white rounded-lg">⬅ Back</button>
    </div>
  );
}
