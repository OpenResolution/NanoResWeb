import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex w-screen h-20 justify-between bg-gray-950">
      <Link
        className="p-4 flex align items-center justify-center text-4xl"
        href="/"
      >
        <Image src="/logo.png" alt="SMLM Logo" width={100} height={100} />
      </Link>
      <div className="p-4 flex align items-center justify-center">
        <div className="border-2 px-[1em] py-[0.5em]">
          <Link href="/panel"> Panel </Link>
        </div>
      </div>
    </div>
  );
}
