import SampleR3f from "../wigets/r3f/Sample";
import { Leva } from "leva";

export default function Home() {
  return (
    <main>
      <div className="h-[80dvh] lg:h-[calc(100dvh-56px)] snap-center overflow-hidden ">
        <SampleR3f />
        {/* <Stats />  */}
        <Leva collapsed hidden />
      </div>
    </main>
  );
}
