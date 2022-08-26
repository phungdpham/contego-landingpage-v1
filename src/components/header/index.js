import Link from 'next/link';
import Logo from '../../images/logo.png'
import Image from 'next/image'


function Header() {
  return (
    <header className="flex flex-wrap items-center text-base justify-center">
      <div className="m-auto md:hidden mt-5 mb-5">
        <Image src={Logo} alt="" className="h-36 w-36" />
      </div>
    </header>
  );
}

export default Header;
