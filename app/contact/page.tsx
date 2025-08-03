// // app/contact/page.tsx or wherever you want the form
// "use client";
// import { useState } from "react";
// import styles from "./../css/style.module.css";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const res = await fetch(
//       "https://grude-online.info/wp-json/contact-form/send",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       }
//     );

//     if (res.ok) {
//       setStatus("Message sent!");
//       setFormData({ name: "", email: "", message: "" });
//     } else {
//       setStatus("Failed to send message.");
//     }
//   };

//   return (
//     <div className="container px-3">
//       <div className="d-block text-center mb-4">
//         <h1
//           className={styles.h2Mobile}
//           style={{
//             display: "inline-block",
//             paddingBottom: "5px",
//             borderBottom: "2px solid #4169e1",
//           }}
//         >
//           Kontaktirajte nas
//         </h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Vaše Ime"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="d-block mb-3 py-1 px-2"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Vaš Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="d-block mb-3 py-1 px-2"
//         />
//         <textarea
//           name="message"
//           placeholder="Vaša Poruka"
//           value={formData.message}
//           rows={8}
//           onChange={handleChange}
//           required
//           className="w-100 mb-3 py-1 px-2"
//         />
//         <div className="d-block w-100 text-center mb-4">
//           <button
//             type="submit"
//             style={{
//               background: "#4169e1",
//               color: "white",
//               border: "none",
//               padding: "8px 15px 5px 15px",
//               fontWeight: "bold",
//               letterSpacing: "1px",
//               fontSize: "14px",
//               borderRadius: "5px",
//             }}
//           >
//             Pošalji
//           </button>
//         </div>
//         {status && <p>{status}</p>}
//       </form>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    const file = formData.get("file_upload") as File | null;
    if (file && file.size > 5 * 1024 * 1024) {
      setStatus("File is too large. Max 5MB.");
      return;
    }

    const res = await fetch(
      "https://your-site.com/wp-json/wpforms/v1/forms/12/entries",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message.");
    }

    e.currentTarget.reset();
  }

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Optional media</label>
          <input
            name="file_upload"
            type="file"
            className="form-control"
            accept="image/*,video/*"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
      {status && <div className="alert mt-3">{status}</div>}
    </div>
  );
}
