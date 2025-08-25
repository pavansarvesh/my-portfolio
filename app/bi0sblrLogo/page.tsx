import Image from "next/image";

export default function Bi0sblrLogoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6">bi0sblr Logo</h1>
      <Image
        src="/bi0sblrLogo.jpg"
        alt="bi0sblr Logo"
        width={400}
        height={400}
        priority
        className="rounded shadow-lg"
      />
    </div>
  );
}
