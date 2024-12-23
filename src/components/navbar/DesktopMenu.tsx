const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <a href="#about" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">About</a>
      <a href="#services" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Services</a>
      <a href="#solutions" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Solutions</a>
      <a href="#contact" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Contact Us</a>
    </div>
  );
};

export default DesktopMenu;