import SampleR3f from "../wigets/r3f/Sample";
import { Leva } from "leva";

export default function Home() {
  return (
    <main>
      <div className="h-[100dvh]">
        <SampleR3f />
        {/* <Stats />  */}
        <Leva collapsed />
      </div>
    </main>
  );
}
