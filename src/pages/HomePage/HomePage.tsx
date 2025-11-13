import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Award, 
  Users, 
  Clock, 
  Calendar,
  Sparkles,
  Zap,
  Eye,
  Scissors,
  Star,
  Smile
} from 'lucide-react';
import LuxuryRoomImage from '../../components/Assets/white people.jpg';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 2.5rem 0 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="white" opacity="0.1"><path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z"></path></svg>');
    background-size: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 6rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 7rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  filter: brightness(0.88);
  color: #fff !important;
  padding: 0.6rem 1.3rem;
  font-size: 1.08rem;
  border-radius: 12px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 200px;
    justify-content: center;
  }
`;

const SecondaryButton = styled(Link)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  filter: brightness(0.88);
  color: #fff !important;
  padding: 0.6rem 1.3rem;
  font-size: 1.08rem;
  border-radius: 12px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 200px;
    justify-content: center;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.medium};
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Section = styled.section`
  padding: 6rem 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: ${props => props.theme.borderRadius.large};
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

const ServiceTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;


const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.success} 100%);
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ImageOverlayText = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.5rem 2rem;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  line-height: 1.4;
  text-shadow: 0 6px 16px rgba(0, 0, 0, 0.45);
  max-width: 280px;
`;

const HomePage: React.FC = () => {
  const servicesRef = React.useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Välkommen till Health Care Point AB
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vi är hälsokonsulten som förenar medicinsk expertis, estetiska resultat och 
            helhetsfokus. Vårt team i Stockholm stöttar dig genom hela resan – från första 
            konsultation till färdig behandling hos våra samarbetspartner.
          </HeroSubtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex' }}
            >
              <PrimaryButton to="/kontakt">
                Kontakta oss
                <Calendar size={20} />
              </PrimaryButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex' }}
            >
              <SecondaryButton to="/tjanster">
                Utforska tjänster
              </SecondaryButton>
            </motion.div>
          </ButtonGroup>

          {/* Bildrutor med riktiga bilder och skarpa kanter */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '-2rem 0 2.5rem 0' }}>
            <motion.img
              src={require('../../components/Assets/doctor writing.jpg')}
              alt="Doktor skriver"
              style={{ flexGrow: 1, width: '100%', height: 240, objectFit: 'cover', borderRadius: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
            />
            <motion.img
              src={require('../../components/Assets/healthcarepatient.jpg')}
              alt="Patient och vård"
              style={{ flexGrow: 1, width: '100%', height: 240, objectFit: 'cover', borderRadius: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.5 }}
            />
            <motion.img
              src={require('../../components/Assets/patientroom.jpg')}
              alt="Patientrum"
              style={{ flexGrow: 1, width: '100%', height: 240, objectFit: 'cover', borderRadius: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1 }}
            />
            <motion.img
              src={require('../../components/Assets/reception.jpg')}
              alt="Reception"
              style={{ flexGrow: 1, width: '100%', height: 240, objectFit: 'cover', borderRadius: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1.5 }}
            />
          </div>

          <div style={{ marginTop: '5.5rem' }}>
            <StatsGrid ref={statsRef}
              as={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <StatItem
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StatNumber>30+</StatNumber>
                <StatLabel>Länder vi hjälper patienter från</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatNumber>100+</StatNumber>
                <StatLabel>Vårdinrättningar i vårt nätverk</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatNumber>10</StatNumber>
                <StatLabel>Medarbetare inom hälsokonsultation</StatLabel>
              </StatItem>
              <StatItem
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatNumber>2023</StatNumber>
                <StatLabel>Grundades i Stockholm</StatLabel>
              </StatItem>
            </StatsGrid>
          </div>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Våra tjänster</SectionTitle>
          <SectionSubtitle>
            Utforska vårt omfattande utbud av tjänster. Från medicinska behandlingar till 
            skönhetsvård strävar vi efter att leverera enastående service och resultat som 
            överträffar dina förväntningar.
          </SectionSubtitle>

          <ServicesGrid ref={servicesRef}>
            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ServiceIcon>
                <Sparkles size={40} />
              </ServiceIcon>
              <ServiceTitle>Skräddarsydd skönhetskonsultation</ServiceTitle>
              <ServiceDescription>
                Individuellt anpassad rådgivning som hjälper dig att välja rätt 
                behandlingar, produkter och planer för att stärka självförtroende och välmående.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceIcon>
                <Zap size={40} />
              </ServiceIcon>
              <ServiceTitle>Avancerade medicinska behandlingar</ServiceTitle>
              <ServiceDescription>
                Medicinska ingrepp utförda av erfarna specialistläkare med den senaste 
                tekniken för att möta olika hudtillstånd, åldrande och medicinska behov.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ServiceIcon>
                <Eye size={40} />
              </ServiceIcon>
              <ServiceTitle>Spa- och wellnessupplevelser</ServiceTitle>
              <ServiceDescription>
                Avkopplande behandlingar, ritualer och personlig uppmärksamhet som 
                återställer balans, välbefinnande och sinnesfrid.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ServiceIcon>
                <Scissors size={40} />
              </ServiceIcon>
              <ServiceTitle>Kirurgiska skönhetsbehandlingar</ServiceTitle>
              <ServiceDescription>
                Tillgång till avancerade kirurgiska tekniker med personlig planering, 
                professionell vård och trygg eftervård.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ServiceIcon>
                <Star size={40} />
              </ServiceIcon>
              <ServiceTitle>Patientresor till Turkiet</ServiceTitle>
              <ServiceDescription>
                Komplett koordination av hälsoturism – från konsultation och logistik 
                till stöd under hela behandlingsresan hos våra partners i Turkiet.
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ServiceIcon>
                <Smile size={40} />
              </ServiceIcon>
              <ServiceTitle>Partnerskap i Europa</ServiceTitle>
              <ServiceDescription>
                Ett omfattande nätverk med över hundra vårdinrättningar i Turkiet och 
                Europa som ger tillgång till rätt expertis och resurser för varje patient.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>

      <Section style={{ backgroundColor: '#f8fafc' }}>
        <Container>
          <SectionTitle>Varför välja Health Care Point AB?</SectionTitle>
          <SectionSubtitle>
            Välj Health Care Point AB för ett tryggt och personligt omhändertagande. Vi erbjuder innovativa medicinska behandlingar, avancerad kirurgi och avkopplande spa-upplevelser. Vårt engagerade team guidar dig mot hälsa, skönhet och välbefinnande med fokus på kvalitet, säkerhet och omtanke.
          </SectionSubtitle>

          <FeaturesGrid>
            <FeaturesList>
              <FeatureItem
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FeatureIcon>
                  <Shield size={24} />
                </FeatureIcon>
                <FeatureText>
                  <h4>Hälsoturism med ansvar</h4>
                  <p>Vi matchar varje patient med certifierade sjukhus och kliniker för säkra behandlingsresultat.</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FeatureIcon>
                  <Award size={24} />
                </FeatureIcon>
                <FeatureText>
                  <h4>Stort vårdnätverk</h4>
                  <p>Över 100 vårdinrättningar i Turkiet och Europa ger oss flexibilitet att hitta rätt behandling.</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FeatureIcon>
                  <Clock size={24} />
                </FeatureIcon>
                <FeatureText>
                  <h4>Smidig koordinering</h4>
                  <p>Vi sköter planering, logistik och uppföljning så att din behandlingsresa blir enkel.</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FeatureIcon>
                  <Users size={24} />
                </FeatureIcon>
                <FeatureText>
                  <h4>Expertteam i Stockholm</h4>
                  <p>Vårt team med 10 medarbetare vägleder dig genom varje steg och svarar på alla frågor.</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FeatureIcon>
                  <Heart size={24} />
                </FeatureIcon>
                <FeatureText>
                  <h4>Helhetsfokus på välbefinnande</h4>
                  <p>Vi balanserar hälsa, skönhet och trygghet för att överträffa dina förväntningar.</p>
                </FeatureText>
              </FeatureItem>
            </FeaturesList>

            <ImagePlaceholder>
              <img 
                src={LuxuryRoomImage}
                alt="Hälsa, skönhet och välbefinnande"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
              />
              <ImageOverlayText style={{ position: 'absolute', left: 0, bottom: 0 }}>
                Hälsa, skönhet och välbefinnande
              </ImageOverlayText>
            </ImagePlaceholder>
          </FeaturesGrid>
        </Container>
      </Section>


    </HomeContainer>
  );
};

export default HomePage;