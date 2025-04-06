import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 w-full">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Developer</h4>
          <p className="mb-1">Supritam Sarkar</p>
          <p className="mb-1">supritamsarkar481@gmail.com</p>
          <a 
            href="https://github.com/SupritamSarkar" 
            target='_blank'
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-2"
          >🔗 GitHub Link
        
          </a>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Links</h4>
          <ul className="space-y-2">
            <li><a href="/help" className="hover:text-white">Help</a></li>
            <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

   

       
      </div>
    </footer>
  );
};

export default Footer;
