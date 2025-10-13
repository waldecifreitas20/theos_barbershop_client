export function SocialsMedia() {
  return (
    <>
      <div
        className="
        flex   
        items-center
        justify-evenly
        text-3xl
        leading-20
        w-full 
        mt-10
        relative
        z-10 
        h-fit

        md:leading-[20px]
        md:text-lg
        md:m-0
        md:gap-6
        md:ml-auto 
        md:text-white/70 
        md:w-fit 
      ">
        <a
          className="cursor-pointer inline-block hover:text-blue-500"
          target="_blank"
          href="https://www.instagram.com/">
          <i className="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a
          className="cursor-pointer inline-block hover:text-blue-500"
          target="_blank"
          href="https://www.facebook.com/">
          <i className="fa-brands fa-lg fa-facebook-f"></i>
        </a>
        <a
          className="cursor-pointer inline-block hover:text-blue-500"
          target="_blank"
          href="https://www.whatsapp.com/">
          <i className="fa-brands fa-lg fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}