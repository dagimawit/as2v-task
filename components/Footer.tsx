import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-200 text-gray-800 py-8">
        <div className="container mx-auto flex flex-wrap items-start justify-between">
          <div className="w-full md:w-4/12 px-4">
            <div>
              <h3 className="text-lg font-semibold">Hakim HUB</h3>
             
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4">
            <div>
              <h3 className="text-lg font-semibold">Get Connected</h3>
              <ul className="list-none">
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </li>
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>
                </li>
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4">
            <div>
              <h3 className="text-lg font-semibold">Social Media</h3>
              <ul className="list-none">
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="px-4 py-2 text-sm">
                  <a href="#" className="text-gray-800 hover:text-gray-500">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4">
          &copy; 2024 Hakim HUB. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;


