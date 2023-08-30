import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

interface BlockProps {
  className: string;
  children: React.ReactNode;
}

function CenterContentBlock(props: BlockProps) {
  return (
    <div
      className={`flex justify-center items-center  bg-contain bg-blend-overlay ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <div className="w-screen min-h-screen bg-gray-950">
      <Head>
        <title>NanoRes</title>
        <meta
          name="description"
          content="Official website of NanoRes LLC."
        />
        <meta name="google-site-verification" content="nsu4VTfYbLqjO65lF_YpbxlD_VpEVWXrOKjnHjMNJQE" />
      </Head>

      <div className="flex items-center fixed top-0 left-0 w-full z-50 bg-black">
        <Link
          className="flex align items-center justify-center text-4xl"
          href="/"
        >
          <Image src="/logo.png" alt="SMLM Logo" width={100} height={100} />
        </Link>
        <Navigation />
        <div className="p-4 flex align items-center justify-center">
          <div className="border-2 px-[1em] py-[0.5em]">
            <Link href="/panel"> Panel </Link>
          </div>
        </div>
      </div>

      <main>
        <CenterContentBlock className="aspect-[21/9] bg-hero">
          <div className="text-4xl">
            To see a world in a wild flower,
            <br />
            and a bodhi in a leaf.
          </div>
        </CenterContentBlock>
        <div className="grid grid-cols-2 gap-4 p-4">
          <CenterContentBlock className="bg-2dSMLM aspect-square">
            <Link className="text-3xl" href="/panel">
              2D Reconstruction
            </Link>
          </CenterContentBlock>
          <CenterContentBlock className="bg-3dSMLM aspect-square">
            <div className="text-3xl">
              <div>3D Reconstruction</div>
            </div>
          </CenterContentBlock>
        </div>
      </main>
    </div>
  );
}
