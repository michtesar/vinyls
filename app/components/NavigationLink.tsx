import React from 'react';
import { useRouter } from 'next/navigation';

interface NavigationLinkProps {
  label: string;
  to: string;
  icon: React.ReactNode;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  label,
  to,
  icon,
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-row w-auto space-x-3.5 justify-end mb-3 p-2 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer"
      onClick={() => {
        router.push(to);
      }}
    >
      {icon}
      <p className="text-white text-xs font-semibold">{label}</p>
    </div>
  );
};
