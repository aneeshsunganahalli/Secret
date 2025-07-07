import React from 'react';
import Image from 'next/image';

interface SocialLink {
  href: string;
  alt: string;
  icon: string;
}

const ContactSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://x.com/jkane',
      alt: 'Twitter/X',
      icon: 'https://cdn.sanity.io/images/6tgemksh/production/a1b46edbf40f0aab80af0379cf366611c5c97d57-64x64.png?fit=max&auto=format'
    },
    {
      href: 'https://dribbble.com/jkane',
      alt: 'Dribbble',
      icon: 'https://cdn.sanity.io/images/6tgemksh/production/7e347e26210b893b270c1d4fdfe430880d507693-64x64.png?fit=max&auto=format'
    },
    {
      href: 'https://enteroutland.com/',
      alt: 'Outland',
      icon: 'https://cdn.sanity.io/images/6tgemksh/production/78850df02f3cfd6ec8bc75a6fdd36906aa4cbfb2-64x64.png?fit=max&auto=format'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('contact@jkane.co');
      // You can add a toast notification here if needed
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="bg-gray-50 rounded-3xl p-4 flex justify-between items-center h-fit relative z-[2] transform translate-x-0">
      <button 
        onClick={copyToClipboard}
        className="flex text-gray-600 font-normal gap-x-2 items-center py-1.5 pl-3 pr-2 rounded-full border border-gray-300 group hover:bg-gray-300/10 hover:text-gray-800 transition-colors duration-100 w-[167px] justify-between"
      >
        <span>contact@jkane.co</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:stroke-gray-800 transition-all duration-100"
        >
          <path 
            d="M12.5 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H7.5" 
            stroke="#0D0D0D" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M6.875 5.625V5C6.875 4.1712 7.20424 3.37634 7.79029 2.79029C8.37634 2.20424 9.1712 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5V5.625H6.875Z" 
            stroke="#0D0D0D" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      <div className="flex gap-x-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={link.href}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 group hover:bg-gray-100 hover:border-gray-300 transition-colors duration-200"
          >
            <Image
              src={link.icon}
              alt={link.alt}
              width={16}
              height={16}
              className="transition-opacity duration-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;