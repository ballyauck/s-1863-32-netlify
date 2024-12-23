import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex md:w-[25rem] md:h-20 w-[10rem] h-[40px] items-center justify-center md:scale-100 scale-[1.3]"
    >
      <img 
        src="/lovable-uploads/923f72ac-68ff-4281-b991-9c4d2bde01ba.png" 
        alt="Yuccan Technologies Logo" 
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default Logo;