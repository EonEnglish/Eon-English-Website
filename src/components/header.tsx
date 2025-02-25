import React from 'react'; 
import Image from 'next/image'; 

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 h-[80px]" style={{ backgroundColor: '#352228' }}>
      <nav className="flex items-center justify-between h-full">
        <div className="flex items-center ml-4 ml-[100px]"> {/* Added right margin */}
        <Image
          src="/images/eonEnglishIcon.png"  
          alt="Logo"
          width={140}  // Increase width
          height={140} // Increase height
          className="h-auto w-auto mr-4" // Ensure the aspect ratio is maintained
        />

        </div>
        
        <div className="ml-auto mr-4">
          <div className="flex justify-end mr-[70px]"> {/* Added right margin */}
            <button 
                className="
                bg-transparent 
                border border-gray-300 
                h-[50px] 
                w-[160px] 
                rounded-[21px] 
                px-5 
                py-2 
                mt-2 
                mb-2 
                mr-2 
                hover:bg-gray-400 
                text-white 
                flex 
                items-center 
                justify-center
                "
            >
                Become a teacher
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
