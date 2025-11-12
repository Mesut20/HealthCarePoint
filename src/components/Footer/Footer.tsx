import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Clock,
  Shield,
  Award,
  Users
} from 'lucide-react';
import HCPLogo from '../Assets/HCP.jpg';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
    gap: 2rem;
  }
`;

const FooterSection = styled.div<{
  extraMarginTop?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${props => props.extraMarginTop ? 'margin-top: -192px;' : ''}
`;

const SectionTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const FooterLogoImage = styled.img`
  height: 120px;
  width: auto;
  transition: all 0.3s ease;
  background: transparent;
  border-radius: 4px;

  &:hover {
    transform: scale(1.05);
  }
`;


const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  svg {
    flex-shrink: 0;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const QuickLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.3rem 0;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.4);
  }
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const WorkingDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const CertificationBadges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const handleQuickLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <FooterLogoImage src={HCPLogo} alt="HealthCarePoint" />
          </Logo>
          <SocialLinks>
            <SocialLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={20} />
            </SocialLink>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Snabblänkar</SectionTitle>
          <QuickLinks>
            <QuickLink to="/" onClick={handleQuickLinkClick}>Hem</QuickLink>
            <QuickLink to="/om-oss" onClick={handleQuickLinkClick}>Om Oss</QuickLink>
            <QuickLink to="/tjanster" onClick={handleQuickLinkClick}>Våra Tjänster</QuickLink>
            <QuickLink to="/kontakt" onClick={handleQuickLinkClick}>Kontakt</QuickLink>
            <QuickLink to="/boka-tid" onClick={handleQuickLinkClick}>Boka Tid</QuickLink>
          </QuickLinks>

          <CertificationBadges>
            <Badge>
              <Shield size={18} />
              <span>Säkra behandlingar</span>
            </Badge>
            <Badge>
              <Award size={18} />
              <span>Certifierade estetiska behandlingar</span>
            </Badge>
            <Badge>
              <Users size={18} />
              <span>Auktoriserad personal</span>
            </Badge>
          </CertificationBadges>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Öppettider</SectionTitle>
          <WorkingHours>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Clock size={18} />
              <span style={{ fontWeight: '500' }}>Mottagning</span>
            </div>
            <WorkingDay>
              <span>Måndag - Fredag:</span>
              <span>09:00 - 15:00</span>
            </WorkingDay>
            <WorkingDay>
              <span>Lördag:</span>
              <span>Stängt</span>
            </WorkingDay>
            <WorkingDay>
              <span>Söndag:</span>
              <span>Stängt</span>
            </WorkingDay>
          </WorkingHours>
        </FooterSection>

  <FooterSection style={{marginTop: '-228px'}}>
          <SectionTitle>Kontaktinformation</SectionTitle>
          <ContactInfo>
            <ContactItem>
              <Phone size={18} />
              <span>+46723030125</span>
            </ContactItem>
            <ContactItem>
              <Mail size={18} />
              <span>info@hcpab.se</span>
            </ContactItem>
            <ContactItem>
              <MapPin size={18} />
              <span>Munkhättevägen 55, 147 40 Tumba</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
  <p>© {currentYear} HealthCarePoint AB. Alla rättigheter förbehållna. </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;