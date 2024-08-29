import ReactPlayer from "react-player";

function Panel2() {
  return (
    <section className="w-[100vw] h-[100dvh] relative">
      <ReactPlayer
        url={"https://pohwa.xyz/assets/video/yunoh/index.mp4"}
        loop
        muted
        controls={false}
        playing
        height={"100%"}
        width={"100%"}
        background={true}
        playsinline={true}
        className="bg-video"
        fallback={<div className="bg-[url('https://pohwa.xyz/logo.png')]" />}
      />
    </section>
  );
}

export default Panel2;
