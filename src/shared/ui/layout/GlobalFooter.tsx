const GlobalFooter = () => {
  return (
    <footer className="relative">
      {/* 첫 번째 섹션: 메인 메시지 */}
      {/* <section className="h-[100dvh] w-full snap-start flex items-start pt-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-14">
          <h2 className="text-background font-archivo text-4xl lg:text-6xl -tracking-[.04em] leading-tight">
            Motorcycle isn&apos;t just a machine,
            <span className="block">
              It&apos;s an expression of freedom, passion,
            </span>
            <span className="block">And the spirit of endless adventure.</span>
            <span className="block mt-8">At Pohwa,</span>
            <span className="block">
              We believe in shaping an identity that reflects your unique riding
              style.
            </span>
          </h2>
        </div>
      </section> */}
      {/* 두 번째 섹션: 로고와 연락처 */}
      {/* <section className="h-[100dvh] w-full snap-start bg-background">
        <div className="h-full w-full flex flex-col justify-between p-4 lg:p-8">
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/pohwa_logo.png"
              alt="Pohwa Logo"
              width={200}
              height={96}
              className="object-contain"
            />
          </div> */}
      {/* 
          <div className="w-full flex justify-between items-end text-xs font-bold">
            <div className="space-x-4"></div>

            <div className="text-right">
              <p className="uppercase">© 2024 pohwa.xyz all rights reserved.</p>
              <a
                href="mailto:pohwa.official@gmail.com"
                className="hover:underline"
              >
                pohwa.official@gmail.com
              </a>
            </div>
          </div> */}
      {/* </div>
      </section> */}
      <section className="w-full bg-background py-16 -mt-[1px]">
        <div className="container mx-auto px-4 lg:px-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 underline text-sm">
              {/* <Link href="/" className="hover:text-primary">
                HOME
              </Link>
              <Link href="/about" className="hover:text-primary">
                ABOUT
              </Link>
              <a
                href="http://shop.pohwa.xyz"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                SHOP
              </a> */}
              <a
                href="https://www.instagram.com/pohwa_official/"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>
            </div>

            <div className="text-sm text-center md:text-right">
              <p>© 2024 POHWA All rights reserved.</p>
              <a
                href="mailto:pohwa.official@gmail.com"
                className="hover:underline"
              >
                pohwa.official@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default GlobalFooter;
