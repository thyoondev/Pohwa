import Image from "next/image";

const GlobalFooter = () => {
  return (
    <>
      <div className="h-[calc(100dvh-56px)] w-full bg-primary p-4 lg:p-14 snap-center shrink-0">
        <p className="text-background text-4xl lg:text-6xl font-archivo -tracking-[.04em]">
          Motorcycle isn&apos;t just a machine,
          <br /> It&apos;s an expression of freedom, passion, <br /> And the
          spirit of endless adventure.
          <br />
          <br />
          At Pohwa, <br />
          We believe in shaping an identity that reflects your unique riding
          style.
        </p>
      </div>
      <footer className="h-[calc(100dvh-56px)] w-full bg-background flex justify-start items-center gap-4 px-4 relative snap-center shrink-0">
        <figure className="w-full h-full flex justify-center items-center">
          <Image src="/pohwa_logo.png" alt="logo" width={200} height={96} />
        </figure>
        <p className="absolute bottom-2 left-2 text-xs uppercase">
          © 2024 pohwa.xyz all rights reserved.
        </p>
      </footer>
    </>
  );
};

export default GlobalFooter;
