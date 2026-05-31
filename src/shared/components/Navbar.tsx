'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MobileMenuItemProps } from '@shared-types/components';
import { navLinks } from '@shared-constants/navigations';
import Button from '@shared-components/ui/Button';
import { BtnVariant } from '@shared-constants/enum';
import { NavLink } from '@shared-components/ui/Navlink';

const MobileMenuItem = memo(({ link, onClick }: MobileMenuItemProps) => (
  <Link
    href={link.href}
    onClick={onClick}
    className="px-4 py-3 text-sm font-medium text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
  >
    {link.name}
  </Link>
));

MobileMenuItem.displayName = 'MobileMenuItem';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>(
    pathname === '/projects' ? 'light' : 'dark'
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -90% 0px', // Focus on the top of the viewport
      threshold: [0, 0.1],
    };

    // Manual check function for back-navigation/immediate load
    const manualThemeCheck = () => {
      const sections = document.querySelectorAll('[data-theme]');
      let currentTheme: 'light' | 'dark' = pathname === '/projects' ? 'light' : 'dark';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the top of the section is at or above the top of the viewport
        if (rect.top <= 100 && rect.bottom >= 0) {
          currentTheme = section.getAttribute('data-theme') as 'light' | 'dark';
        }
      });
      setActiveTheme(currentTheme);
    };

    // Observer logic for scrolling
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme') as 'light' | 'dark';
          if (theme) setActiveTheme(theme);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const setupObserver = () => {
      const sections = document.querySelectorAll('[data-theme]');
      sections.forEach((section) => observer.observe(section));
      manualThemeCheck(); // Run immediate check after setting up
    };

    setupObserver();

    // Re-check on a slight delay to ensure Next.js has finished DOM updates
    const timer = setTimeout(manualThemeCheck, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // Re-runs every time you change pages or go back

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  const isLightRoute = pathname === '/projects';
  const isDarkContentNeeded = isScrolled || activeTheme === 'light' || isLightRoute;
  const logoSrc = isDarkContentNeeded ? '/images/catblack.svg' : '/images/catwhite.svg';
  const mobileBtnColor = isDarkContentNeeded ? 'rgb(23, 23, 23)' : 'rgba(255, 255, 255, 1)';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-25"
    >
      <div className="relative h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            className="shrink-0 z-10"
            animate={{
              x: isMobile ? 0 : isScrolled ? 24 : 64,
              y: isMobile ? 0 : isScrolled ? -8 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              animate={{
                backgroundColor: isScrolled
                  ? '#ffffff'
                  : activeTheme === 'light'
                    ? 'rgba(255, 255, 255, 0)'
                    : 'rgba(255, 255, 255, 0)',
                boxShadow: isScrolled ? '0 4px 16px rgba(0, 0, 0, 0.1)' : '0 0 0 rgba(0, 0, 0, 0)',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="inline-block p-2"
              style={{ padding: '0.50rem 1rem', borderRadius: '10px' }}
            >
              <Link href="/" className="block">
                <Image
                  unoptimized
                  src={logoSrc}
                  alt="Cat"
                  width={36}
                  height={36}
                  priority
                  className="block"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.nav
            animate={{
              x: isScrolled ? 24 : 0,
              y: isScrolled ? -8 : 0,
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255,0)',
              paddingLeft: isScrolled ? '1rem' : '0rem',
              paddingRight: isScrolled ? '1rem' : '0rem',
              width: isScrolled ? '30%' : '80%',
              paddingTop: isScrolled ? '0.25rem' : '0rem',
              paddingBottom: isScrolled ? '0.25rem' : '0rem',
              borderRadius: isScrolled ? '9999px' : '0px',
              boxShadow: isScrolled ? '0 2px 12px rgba(0, 0, 0, 0.10)' : '0 0 0 rgba(0, 0, 0, 0)',
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="hidden md:flex items-center justify-around"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                isScrolled={isScrolled}
                activeTheme={activeTheme}
                forceLight={isLightRoute}
              />
            ))}
          </motion.nav>

          <motion.div
            className="shrink-0 z-10 hidden md:block"
            animate={{
              x: isScrolled ? -24 : -64,
              y: isScrolled ? -8 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link href="#footer-form">
              <Button variant={isDarkContentNeeded ? BtnVariant.PRIMARY : BtnVariant.SECONDARY}>
                Start a Project
              </Button>
            </Link>
          </motion.div>

          <motion.button
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
            animate={{ color: mobileBtnColor }}
            className="md:hidden z-10 p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 bg-white rounded-2xl p-6 shadow-xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <MobileMenuItem key={link.name} link={link} onClick={closeMobileMenu} />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
