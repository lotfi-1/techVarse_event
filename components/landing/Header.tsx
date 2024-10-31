/** @format */
import NavBar from "@/components/ui/NavBar";

export default function Header() {
  return (
    <header className="mx-6 md:mx16 px-5 h-20 flex justify-between items-center gap-x-4">
      <div className="flex items-center">
        <h3 className="text-3xl text-primary-txt">Logo</h3>
      </div>
      <NavBar />
    </header>
  );
}
