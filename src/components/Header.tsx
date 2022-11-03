import icon from "../assets/favico/android-chrome-512x512.png";

export function Header() {
  return (
    <>
      <img src={icon} alt="icon" className="h-16 w-16 mt-16 mb-6 " />
      <h1 className="text-white font-bold text-4xl">
        Não sabe o que assistir?
      </h1>
    </>
  );
}
