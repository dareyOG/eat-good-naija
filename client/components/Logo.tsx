import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/assets/ThaiHotPot.svg"
      alt="logo"
      width={32}
      height={32}
      priority
      className="inline-block"
    />
  );
}

export default Logo;
