"use client";

import { useState } from "react";

export default function MobileForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMessage("✅ Vijest je uspješno poslana!");
      e.currentTarget.reset();
    } else {
      setMessage(`❌ Greška: ${data.error || "Pokušajte ponovno."}`);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Pošalji vijest</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-white">
            Naslov
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label text-white">
            Sadržaj
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label text-white">
            Slike
          </label>
          <input
            type="file"
            className="form-control"
            id="images"
            name="images"
            accept="image/*"
            multiple
          />
        </div>

        <div className="mb-3">
          <label htmlFor="video" className="form-label text-white">
            Video (max 20MB)
          </label>
          <input
            type="file"
            className="form-control"
            id="video"
            name="video"
            accept="video/*"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Šaljem..." : "Pošalji"}
        </button>

        {message && (
          <div className="mt-3 alert alert-info text-white">{message}</div>
        )}
      </form>
    </div>
  );
}
