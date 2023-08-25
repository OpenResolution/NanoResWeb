import Navigation from "@/components/Navigation";
import Link from "next/link";

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
      <Navigation />
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
