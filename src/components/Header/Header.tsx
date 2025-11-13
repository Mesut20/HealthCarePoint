import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

import HCPLogo from '../Assets/HCP.jpg';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

const HeaderContainer = styled.header`
  background: #f5f6fa;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 140px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  height: 140px;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
    height: 80px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-left: 0;
  margin-right: 3rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LogoImage = styled.img`
  height: 120px;
  width: auto;
  transition: all 0.3s ease;
  
  /* Enkel styling utan extrema filter */
  background: transparent;
  border-radius: 4px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 50px;
  }
`;


const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-left: 0.5rem; /* Move nav section further left */

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.white};
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

interface NavLinkProps {
  $isActive: boolean;
  $first?: boolean;
  $last?: boolean;
}
const NavLink = styled(Link).withConfig({ shouldForwardProp: (prop) => prop !== '$isActive' && prop !== '$first' && prop !== '$last' })<NavLinkProps>`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: 1rem;
  white-space: nowrap;
  padding: 0.5rem 1.1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  box-shadow: 0 4px 15px rgba(212, 175, 140, 0.18);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.$first ? '1.5rem' : '0'};
  margin-right: ${props => props.$last ? '0.7rem' : '0'};

  ${props => props.$isActive && `
    filter: brightness(0.85);
    box-shadow: 0 6px 18px rgba(212, 175, 140, 0.28);
  `}

  &:hover {
    filter: brightness(0.92);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(212, 175, 140, 0.28);
  }

  &:active {
    filter: brightness(0.75);
    box-shadow: 0 4px 12px rgba(138, 98, 58, 0.25);
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

const BookingButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 0.6rem 1.3rem;
  font-size: 1.08rem;
  border-radius: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 140, 0.18);
  white-space: nowrap;

  &:hover {
    filter: brightness(0.92);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(212, 175, 140, 0.28);
  }

  &:active {
    filter: brightness(0.75);
    box-shadow: 0 4px 12px rgba(138, 98, 58, 0.25);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(15, 118, 110, 0.08);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: language === 'en' ? 'Home' : language === 'tr' ? 'Anasayfa' : 'Hem' },
    { path: '/om-oss', label: language === 'en' ? 'About Us' : language === 'tr' ? 'Hakkımızda' : 'Om Oss' },
    { path: '/tjanster', label: language === 'en' ? 'Services' : language === 'tr' ? 'Hizmetler' : 'Tjänster' },
    { path: '/kontakt', label: language === 'en' ? 'Contact' : language === 'tr' ? 'İletişim' : 'Kontakt' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        navigate(path);
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLangChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LeftGroup>
          <Logo to="/" onClick={() => handleNavClick('/')}> 
            <LogoImage src={HCPLogo} alt="HealthCarePoint" />
          </Logo>
        </LeftGroup>
        <NavLinks $isOpen={isMobileMenuOpen} style={{ marginLeft: 0 }}>
          {navItems.map((item, idx) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex' }}
            >
              <NavLink
                to={item.path}
                $isActive={location.pathname === item.path}
                $first={idx === 0}
                $last={idx === navItems.length - 1}
                onClick={() => handleNavClick(item.path)}
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
          <CTAButtons>
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              style={{ display: 'inline-flex' }}
            >
              <BookingButton
                to="/boka-tid"
                onClick={() => handleNavClick('/boka-tid')}
              >
                <Calendar size={18} />
                {language === 'en' ? 'Book Now' : language === 'tr' ? 'Randevu Al' : 'Boka Tid'}
              </BookingButton>
            </motion.div>
          </CTAButtons>
          <LanguageSelector currentLang={language} onChange={handleLangChange} />
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;