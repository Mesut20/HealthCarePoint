import React from 'react';
import { useNavigate } from 'react-router-dom';
import sv from '../../locals/sv.json';
import en from '../../locals/en.json';
import tr from '../../locals/tr.json';
import { useLanguage } from '../../context/LanguageContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Smile,
  Scissors,
  CheckCircle
} from 'lucide-react';



const ServicesContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`};
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 0 4rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 0 3rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 650px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 6rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  background: rgba(16, 185, 129, 0.12);
`;

const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;

  svg {
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
`;

const BookButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  padding: 1.1rem 2.3rem;
  border-radius: 32px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);

  &:hover {
    background: ${({ theme }) => theme.colors.success};
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(16, 185, 129, 0.45);
  }
`;

const serviceIcons = [Sparkles, Shield, Smile, Scissors];


const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  // Use LanguageContext for instant language switching
  const { language } = useLanguage();
  const t = language === 'tr' ? tr : language === 'en' ? en : sv;

  // Bygg services-arrayen dynamiskt från översättningsfilen
  const services = [
    {
      category: t.services_5,
      title: t.services_6,
      description: t.services_7,
      points: [t.services_8, t.services_9],
      icon: serviceIcons[0]
    },
    {
      category: t.services_11,
      title: t.services_12,
      description: t.services_13,
      points: [t.services_14, t.services_15],
      icon: serviceIcons[1]
    },
    {
      category: t.services_17,
      title: t.services_18,
      description: t.services_19,
      points: [t.services_20, t.services_21],
      icon: serviceIcons[2]
    },
    {
      category: t.services_23,
      title: t.services_24,
      description: t.services_25,
      points: [t.services_26, t.services_27],
      icon: serviceIcons[3]
    }
  ];

  const handleBookingClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate('/boka-tid');
    }, 300);
  };

  return (
    <ServicesContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.services_1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.services_2}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>{t.services_3}</SectionTitle>
          <SectionSubtitle>
            {t.services_4}
          </SectionSubtitle>

          <ServicesGrid>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ServiceCard
                  key={service.title}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceHeader>
                    <ServiceIcon>
                      <IconComponent size={36} />
                    </ServiceIcon>
                    <div>
                      <CategoryTag>{service.category}</CategoryTag>
                      <ServiceTitle>{service.title}</ServiceTitle>
                    </div>
                  </ServiceHeader>

                  <ServiceContent>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceFeatures>
                      {service.points.map(point => (
                        <ServiceFeature key={point}>
                          <CheckCircle size={18} />
                          <span>{point}</span>
                        </ServiceFeature>
                      ))}
                    </ServiceFeatures>
                  </ServiceContent>

                  <BookButton onClick={handleBookingClick}>{t.services_10 || 'Boka nu'}</BookButton>
                </ServiceCard>
              );
            })}
          </ServicesGrid>
        </Container>
      </Section>
    </ServicesContainer>
  );
};

export default ServicesPage;
