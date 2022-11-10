import icon from "../assets/favico/android-chrome-512x512.png";

export function Header() {
  return (
    <>
      <img src={icon} alt="icon" className="lg:h-16 lg:w-16 h-8 w-8 lg:mt-16 lg:mb-6 mt-3 mb-3" />
      <h1 className="text-white font-bold lg:text-4xl text-2xl font-roboto">
        Don't know what to watch?
      </h1>
    </>
  );
}
