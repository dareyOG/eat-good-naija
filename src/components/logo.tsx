import Image from 'next/image';

import ThaiHotPot from '@/assets/ThaiHotPot.svg';

function Logo() {
  return <Image src={ThaiHotPot} alt="logo" />;
}

export default Logo;
