'use client';

interface NavButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ children, isActive = false, className = '', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center bg-gray-600 rounded-full pl-[10px] pr-[6px] pt-[4px] pb-[5px] gap-x-[6px] duration-200 relative overflow-hidden lg:py-[6px] lg:pl-[12px] lg:pr-[8px] hover:bg-gray-200 transition-colors ${className}`}
    >
      {isActive && (
        <div className="absolute w-full h-full bg-primary-colour z-[1] left-0 top-0 rounded-full"></div>
      )}
      <div className="text-[14px] leading-[16.8px] lg:text-base lg:leading-[20px] relative z-[2] text-black font-medium">
        {children}
      </div>
      <span className={`w-[14px] h-[14px] border-[1px] border-gray-800 relative rounded-full flex items-center justify-center z-[2] transition-transform duration-500 ease-[cubic-bezier(0.34,0.36,1)] lg:w-[20px] lg:h-[20px] ${isActive ? 'rotate-180' : ''}`}>
        <span className="w-[6px] h-[1px] bg-gray-800 lg:w-[12px]"></span>
        <span className={`w-[6px] h-[1px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-800 rotate-90 transition-transform duration-200 ease-in-out lg:w-[12px] ${isActive ? 'rotate-0' : ''}`}></span>
      </span>
    </button>
  );
};

interface NavbarProps {
  activeSection: 'info' | 'contact';
  setActiveSection: (section: 'info' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {

  return (
    <div className="font-normal py-[6px] pl-[16px] pr-[6px] flex items-center justify-between bg-gray-50 rounded-full h-fit relative z-[2]">
      {/* Spacer */}
      <div></div>
      
      {/* Navigation */}
      <nav className="flex gap-x-[4px] lg:gap-x-[6px]">
        <NavButton 
          isActive={activeSection === 'info'}
          onClick={() => setActiveSection('info')}
          className="!bg-gray-300 hover:!bg-gray-400"
        >
          <span>Info</span>
        </NavButton>
        
        <NavButton
          isActive={activeSection === 'contact'}
          onClick={() => setActiveSection('contact')}
          className="!bg-gray-300 hover:!bg-gray-400"
        >
          <span>Contact</span>
        </NavButton>
      </nav>
    </div>
  );
};

export default Navbar;