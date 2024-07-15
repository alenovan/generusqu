import React from "react";

const EmailVerifiedSection = () => {
  return (
    <div className="bg-[#00AA12] relative overflow-hidden">
      <span className="bg-white w-56 h-56 rounded-full absolute -top-24 -right-32 inline-block opacity-40" />
      <div className="min-h-screen relative z-10 p-4 text-white flex flex-col justify-center items-center text-center">
        <img
          src="./assets/images/success.svg"
          alt="checked"
          className="max-w-full mb-4"
        />
        <p className="mb-2 text-xl font-medium">Verifikasi Email Berhasil</p>
        <p className="max-w-[200px]">
          Alamat email anda telah berhasil diverifikasi
        </p>
      </div>
      <span className="bg-white w-56 h-56 rounded-full absolute -bottom-24 -left-32 inline-block opacity-40" />
    </div>
  );
};

export default EmailVerifiedSection;
