import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/logo/logo_effinity.png")}
        alt="logo"
        width={100}
        height={50}
        style={{ width: 160, height: 80, paddingBottom: '20px' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/logo_effinity.png")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: 160, height: 80, paddingBottom: '20px' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
