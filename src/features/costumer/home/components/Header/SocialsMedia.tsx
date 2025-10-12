export function SocialsMedia() {
  return (
    <>
      <div
        className="
        flex   
        mx-auto 
        text:xl
        justify-evenly 
        w-full 
        mt-10

        lg:text-white/70 
        lg:z-10 
        lg:relative 
        lg:ml-auto 
        lg:w-fit 
        lg:gap-4
      ">
        <a
          className="cursor-pointer hover:text-blue-500"
          target="_blank"
          href="https://www.instagram.com/">
          <i className="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-500"
          target="_blank"
          href="https://www.facebook.com/">
          <i className="fa-brands fa-lg fa-facebook-f"></i>
        </a>
        <a
          className="cursor-pointer hover:text-blue-500"
          target="_blank"
          href="https://www.whatsapp.com/">
          <i className="fa-brands fa-lg fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}