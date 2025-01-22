"use client";

import { useRouter } from "next/navigation";

export default function NavButton({ label, path }) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(path);
      }}
    >
      {label}
    </button>
  );
}
