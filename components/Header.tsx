// components/Header.js
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import image from  '@/public/Logo....png';
import image1 from  '@/public/Frame.png';

const Header = () => {
//   const router = useRouter();

  const handleLogout = () => {
    // Implement your logout functionality here
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    // Implement your search functionality here using the searchQuery
  };

  return (
    <header>
      <div className="left">
        <div className='flex'>
           {/* <button onClick={handleLogout}>Logout</button> */}
           <div className="w-1/3 ">
            <Image
              src={image1}
              alt="img"
              className="pl-5"
              width={100} 
              height={100}
            />
          </div>
        <div className="w-1/3 ">
            <Image
              src={image}
              alt="img"
              className="pl-5"
              width={300} 
              height={300}
            />
          </div>
        </div>
     
      </div>
      <div className="center">
        <nav>
          <Link href="/" className='font bold'>Home</Link>
          <Link href="/hospitals">Hospitals</Link>
          <Link href="/doctors">Doctors</Link>
        </nav>
      </div>
      <div className="righ pr-5">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        nav {
          display: flex;
          gap: 10px;
        }

        form {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </header>
  );
};

export default Header;