"use client";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/firebase.init";
import EventForm from "@/component/Testonials";

export default function EditEvent({ params }) {
  const { id } = params;
  const [event, setEvent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getDoc(doc(db, "events", id)).then((res) => setEvent(res.data()));
  }, [id]);

  const handleUpdate = async (updatedEvent) => {
    await updateDoc(doc(db, "events", id), updatedEvent);
    router.push(`/event/${id}`);
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Event</h1>
      <EventForm initialData={event} onSubmit={handleUpdate} />
    </div>
  );
}
