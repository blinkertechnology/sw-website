export const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        background:
          "linear-gradient(90.02deg, rgba(152, 152, 152, 0.28) 3.11%, rgba(190, 188, 188, 0.126) 98.58%)",
        boxShadow: "0px 1px 50px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(17.5px)",
      }}
      className="flex bg-gray-800 items-center h-[70px] px-[128px]"
    >
      <div className="flex flex-shrink-0 items-center mr-auto">Sorted</div>

      <div className="flex items-center gap-8 *:font-medium text-gray-300">
        <a href="#">About</a>
        <a href="#">Resources</a>
        <a href="#">Company</a>

        <a href="#">Careers</a>
      </div>
    </nav>
  );
};
