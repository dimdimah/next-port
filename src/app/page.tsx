import CardBio from "@/components/cardBio";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="gap-[36px]">
      <h1 className="text-[48px] font-bold">Dimah Luthfi</h1>
      <p className="mb-[32px]">
        Saya Dimah, seorang{" "}
        <span className="font-bold">Mahasiswa Informatika</span> STMIK Amikom
        Surakarta
      </p>
      <CardBio />
      <p className="mt-[32px]">
        Sebagai seorang junior programer, saya menguasai beberapa bahasa
        pemrograman seperti Java, Python, dan Next Js. Saya selalu mencari cara
        untuk meningkatkan keterampilan saya dan mengeksplorasi teknologi baru
        yang dapat membantu saya menciptakan solusi yang lebih baik.
      </p>
      <div className="inline-flex gap-4 mt-2">
        <Link
          href="https://github.com/dimdimah"
          className="underline underline-offset-1"
        >
          Github
        </Link>
        <Link href="/" className="underline underline-offset-1">
          Instagram
        </Link>
      </div>
    </div>
  );
}
