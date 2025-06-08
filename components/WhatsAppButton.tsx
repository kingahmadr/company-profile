// components/WhatsAppButton.tsx
"use client";

import type React from "react";

// Define the props for the component
interface WhatsAppButtonProps {
  /** The phone number to send the message to, in international format without '+' or leading zeros. */
  phoneNumber: string;
  /** An optional pre-filled message for the user to send. */
  message?: string;
  /** Optional additional class names for custom styling. */
  className?: string;
}

// A simple, self-contained WhatsApp icon component using SVG
const WhatsAppIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.31 3.4 16.78L2 22L7.32 20.62C8.75 21.36 10.35 21.81 12.04 21.81C17.5 21.81 21.95 17.36 21.95 11.91C21.95 6.45 17.5 2 12.04 2M9.88 7.33C9.68 7.33 9.31 7.43 9.06 7.68C8.81 7.93 8.05 8.69 8.05 9.88C8.05 11.07 9.08 12.2 9.23 12.38C9.38 12.56 10.93 15.06 13.38 16.03C15.83 17 16.33 16.78 16.58 16.73C16.83 16.68 17.69 16.18 17.89 15.51C18.09 14.84 18.09 14.27 17.99 14.17C17.89 14.07 17.74 14.02 17.54 13.92C17.34 13.82 16.08 13.2 15.88 13.12C15.68 13.05 15.53 13.02 15.38 13.28C15.23 13.53 14.78 14.02 14.63 14.17C14.48 14.32 14.33 14.35 14.08 14.25C13.83 14.15 12.89 13.84 11.74 12.84C10.84 12.09 10.23 11.2 10.08 10.95C9.93 10.7 10.06 10.55 10.18 10.43C10.29 10.31 10.43 10.13 10.58 9.98C10.73 9.83 10.78 9.73 10.88 9.53C10.98 9.33 10.93 9.18 10.88 9.08C10.83 8.98 10.26 7.55 10.03 7.33H9.88Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);


export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your services.", // Default message
  className = "",
}: WhatsAppButtonProps) {

  // The WhatsApp URL needs to be properly encoded.
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50 
        bg-green-500 text-white 
        p-4 rounded-full 
        shadow-lg 
        hover:bg-green-600 
        focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50
        transition-transform duration-300 ease-in-out hover:scale-110
        ${className}
      `}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}