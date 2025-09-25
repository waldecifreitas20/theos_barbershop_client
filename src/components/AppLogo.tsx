interface AppLogoProps {
  size?: string;
}

export function AppLogo(props: AppLogoProps) {
  return (
    <>
      <h1 className="text-white title mx-auto block text-center py-10">
        <p className={`${props.size? props.size : "text-4xl md:text-6xl"}`}>Theo's</p>
        <p className="text-lg md:text-xl italic">Barbershop</p>
      </h1>
    </>
  );
}