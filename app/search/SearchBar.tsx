"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarSearch({
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setMenu(false);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="border rounded px-2 py-1"
      />
    </div>
  );
}
