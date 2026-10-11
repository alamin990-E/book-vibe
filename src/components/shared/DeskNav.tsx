


interface navMenuProp{
    navMenu:() => React.ReactNode;
}

const DeskNav = ({navMenu}:navMenuProp) => {

 
 
  return (
    <nav>
      <div className="flex justify-between items-center container mx-auto py-4">
        {/* Nav logo */}
        <h2 className="text-3xl text-black font-bold">
          Book
          <span className="bg-linear-to-r from-[#59C6D2] to-[#23BE0A] bg-clip-text text-transparent">
            Vibe
          </span>
        </h2>

        {/* Nav Menu */}

        <ul className="flex items-center font-medium gap-1 lg:gap-3">{navMenu()}</ul>

        {/* nav-button  */}
        <div className="flex items-center gap-1 lg:gap-2  ">
          <button className="btn  text-white rounded-2.5 border-none bg-[#23BE0A]">
           Sing In
          </button>
          <button className="btn  text-white rounded-2.5 border-none bg-[#59C6D2]">
            Sing Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DeskNav;
