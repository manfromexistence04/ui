'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { LogoProps } from '@/app/(docs)/layout-parts/logo/logo';

const ShadcnuiLogo = ({ width = 24, height = 24, ...props }: LogoProps) => {
  const { theme } = useTheme();

  return (
    <Image
      {...props}
      src={`/logo/shadcnui-${theme === 'dark' ? 'dark.png' : 'light.svg'}`}
      width={width}
      height={height}
      alt="shadcn-ui logo"
      suppressHydrationWarning
    />
  );
};

export default ShadcnuiLogo;
