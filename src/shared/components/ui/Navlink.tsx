import { NavLinkProps } from '@shared-types/components';
import Link from 'next/link';
import { memo, useState } from 'react';
import { motion } from 'framer-motion';

export const NavLink = memo(
  ({
    link,
    isScrolled,
    activeTheme,
    forceLight,
  }: NavLinkProps & { activeTheme: string; forceLight?: boolean }) => {
    const textColor =
      isScrolled || activeTheme === 'light' || forceLight
        ? 'rgb(23, 23, 23)'
        : 'rgba(255, 255, 255, 1)';
    const [isHover, setIsHover] = useState(false);

    return (
      <motion.div
        className="inline-block relative"
        animate={{ color: textColor }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <Link href={link.href} className="text-lg font-bold whitespace-nowrap block">
          {link.name}
        </Link>

        {/* animated underline */}
        <motion.span
          aria-hidden
          initial={{ width: '0%' }}
          animate={{ width: isHover ? '100%' : '0%' }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            left: 0,
            bottom: -1,
            height: 2,
            background: textColor,
            borderRadius: 2,
          }}
        />
      </motion.div>
    );
  }
);
