import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import HCPLogo from '../Assets/HCP.jpg';

const HeaderContainer = styled.header`
  background: #f5f6fa;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
    height: 70px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  margin-left: 9rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  height: 65px;
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

const LogoText = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  color: #8a623a;
  margin-left: 0.2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.4rem;
    margin-left: 0.1rem;
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
  background: ${props => props.theme.colors.accent};
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.$first ? '1.5rem' : '0'};
  margin-right: ${props => props.$last ? '0.7rem' : '0'};

  ${props => props.$isActive && `
    background: ${props.theme.colors.success};
    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.3);
  `}

  &:hover {
    background: ${props => props.theme.colors.success};
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(16, 185, 129, 0.3);
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
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);

  &:hover {
    background: ${props => props.theme.colors.success};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }
  white-space: nowrap;
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Hem' },
    { path: '/om-oss', label: 'Om Oss' },
    { path: '/tjanster', label: 'Tjänster' },
    { path: '/kontakt', label: 'Kontakt' },
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

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={() => handleNavClick('/')}>
          <LogoImage src={HCPLogo} alt="HealthCarePoint" />
          <LogoText>HealthCarePoint</LogoText>
        </Logo>

        <NavLinks $isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
              $first={idx === 0}
              $last={idx === navItems.length - 1}
              onClick={() => handleNavClick(item.path)}
            >
              {item.label}
            </NavLink>
          ))}

          <CTAButtons>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookingButton
                to="/boka-tid"
                onClick={() => handleNavClick('/boka-tid')}
              >
                <Calendar size={18} />
                Boka Tid
              </BookingButton>
            </motion.div>
          </CTAButtons>
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
};

export default Header;