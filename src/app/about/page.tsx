import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[48px] font-bold">About Me</h1>
      <p>
        Saya Dimah, seorang{" "}
        <span className="font-bold">Mahasiswa Informatika</span> STMIK Amikom
        Surakarta, memiliki kemampuan komunikasi yang baik dan dapat bekerja
        sama dengan orang lain dalam tim.
      </p>
      <div className="my-2 border" />
      <p>
        Seorang mahasiswa yang sedang menempuh pendidikan di STMIK Amikom
        Surakarta. Ia merupakan sosok yang percaya diri dan bersemangat dalam
        mengejar pendidikan dan karirnya. Dimah memiliki keinginan yang kuat
        untuk terus belajar dan mengembangkan dirinya dalam bidang teknologi
        informasi.
      </p>
    </div>
  );
};

export default page;
