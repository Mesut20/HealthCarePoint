import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  Shield, 
  Target, 
  Eye,
  Stethoscope,
  Brain,
  Activity,
  Star
} from 'lucide-react';
import SpecialistsImage from '../../components/Assets/specialists.png';
import FamilyImage from '../../components/Assets/familj.png';

const AboutContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 6rem 0 4rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 0 3rem;
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

const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 6rem 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 0;
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

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.textLight};
    margin-bottom: 1.5rem;
  }
`;

const StoryImageWrapper = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 320px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 240px;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const SpecialistsImageSoft = styled(StoryImage)`
  object-position: center 40%;
  filter: blur(0.5px);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ValueIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.success} 100%);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.white};
`;

const ValueTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const ValueDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const StatsSection = styled.div`
  background: #f8fafc;
  padding: 4rem 0;
  margin: 4rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-weight: 500;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const TeamImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 3rem;
`;

const TeamInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamName = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const TeamRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TeamSpecialty = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const CertificationsSection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 4rem 0;
  text-align: center;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const CertIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.accent};
  border-radius: 50%;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.white};
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Om Health Care Point AB
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vi är hälsokonsulten som sedan 2023 guidar patienter i Norden och Europa 
            till certifierade sjukhus och kliniker genom ett omfattande nätverk inom 
            hälsoturism.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <StoryGrid>
            <StoryContent>
              <h3>Vår historia</h3>
              <p>
                Health Care Point AB grundades 2023 med målet att hjälpa patienter att 
                hitta rätt behandling via ledande hälsoinrättningar i Turkiet. Företaget 
                har sitt huvudkontor i Stockholm och består av ett dedikerat team om tio 
                medarbetare som arbetar exklusivt med hälsoturism och kontorsservice åt 
                våra samarbetspartners.
              </p>
              <p>
                Genom en stark infrastruktur och ett växande internationellt nätverk kan 
                vi idag hjälpa patienter från över trettio länder att resa till Turkiet 
                för medicinska behandlingar. Vår ambition är att bli den ledande 
                hälsokonsulten i Norden och Europa.
              </p>
            </StoryContent>
            <StoryImageWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpecialistsImageSoft
                src={SpecialistsImage}
                alt="Specialister som representerar Health Care Point AB:s historia"
              />
            </StoryImageWrapper>
          </StoryGrid>

          <StoryGrid style={{ flexDirection: 'row-reverse' }}>
            <StoryContent>
              <h3>Vår mission</h3>
              <p>
                Vi knyter samman patienter med expertläkare, sjukhus och kliniker som har 
                den specialistkompetens och utrustning som behövs för varje unik 
                behandlingsresa. Vårt fokus är att skapa trygga och transparenta val av 
                vårdgivare.
              </p>
              <p>
                Teamet har arbetat som konsulter i olika EU-projekt sedan 2005 och tar 
                med sig erfarenhet av projektledning, koordinering och evenemangsplanering. 
                Framåt planerar vi hälsomässor och branschevenemang i Sverige och Europa 
                för att stärka samarbetet mellan patienter och vårdaktörer.
              </p>
            </StoryContent>
            <StoryImageWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StoryImage
                src={FamilyImage}
                alt="Familj som illustrerar Health Care Point AB:s mission"
              />
            </StoryImageWrapper>
          </StoryGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Våra värderingar</SectionTitle>
          <SectionSubtitle>
            Dessa kärnvärden guidar allt vi gör och formar hur vi interagerar 
            med våra patienter och kollegor.
          </SectionSubtitle>

          <ValuesGrid>
            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ValueIcon>
                <Heart size={40} />
              </ValueIcon>
              <ValueTitle>Patientfokus</ValueTitle>
              <ValueDescription>
                Vi finns vid patientens sida genom hela behandlingsresan och säkerställer 
                att varje beslut tas utifrån deras mål och behov.
              </ValueDescription>
            </ValueCard>

            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ValueIcon>
                <Award size={40} />
              </ValueIcon>
              <ValueTitle>Kvalitetssäkrade partners</ValueTitle>
              <ValueDescription>
                Vårt nätverk omfattar mer än 100 sjukhus och specialistkliniker med 
                beprövad kompetens och moderna vårdmetoder.
              </ValueDescription>
            </ValueCard>

            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ValueIcon>
                <Shield size={40} />
              </ValueIcon>
              <ValueTitle>Trygghet och transparens</ValueTitle>
              <ValueDescription>
                Vi arbetar öppet med avtal, behandlingsupplägg och uppföljning så att 
                patienter och partners kan känna fullt förtroende.
              </ValueDescription>
            </ValueCard>

            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ValueIcon>
                <Users size={40} />
              </ValueIcon>
              <ValueTitle>Personliga relationer</ValueTitle>
              <ValueDescription>
                Vårt Stockholmsbaserade team bygger långsiktiga relationer med både 
                patienter och vårdleverantörer.
              </ValueDescription>
            </ValueCard>

            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ValueIcon>
                <Target size={40} />
              </ValueIcon>
              <ValueTitle>Målinriktad planering</ValueTitle>
              <ValueDescription>
                Varje behandlingsresa planeras i detalj med logistik, konsultationer och 
                uppföljning som matchar patientens tidsram och förväntningar.
              </ValueDescription>
            </ValueCard>

            <ValueCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ValueIcon>
                <Eye size={40} />
              </ValueIcon>
              <ValueTitle>Branschinsikt</ValueTitle>
              <ValueDescription>
                Vi följer utvecklingen inom hälsoturism och arrangerar kommande 
                hälsomässor och evenemang i Sverige och Europa.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>

      <StatsSection>
        <Container>
          <SectionTitle>Health Care Point i siffror</SectionTitle>
          <StatsGrid>
            <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatNumber>30+</StatNumber>
              <StatLabel>Länder vi stöttar patienter från</StatLabel>
            </StatCard>
            <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatNumber>100+</StatNumber>
              <StatLabel>Samarbetande vårdinrättningar</StatLabel>
            </StatCard>
            <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatNumber>10</StatNumber>
              <StatLabel>Medarbetare i Stockholmsteamet</StatLabel>
            </StatCard>
            <StatCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StatNumber>2005</StatNumber>
              <StatLabel>EU-projekterfarenhet sedan</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      <Section>
        <Container>
          <SectionTitle>Vårt team</SectionTitle>
          <SectionSubtitle>
            Ett dedikerat Stockholmsbaserat team som koordinerar varje steg i din 
            behandlingsresa och håller kontakten med våra samarbetspartners.
          </SectionSubtitle>

          <TeamGrid>
            <TeamCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TeamImage>
                <Stethoscope size={60} />
              </TeamImage>
              <TeamInfo>
                <TeamName>Hälsokonsultteamet</TeamName>
                <TeamRole>Patientkoordinatorer</TeamRole>
                <TeamSpecialty>Personlig rådgivning och matchning av vårdgivare</TeamSpecialty>
              </TeamInfo>
            </TeamCard>

            <TeamCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TeamImage>
                <Brain size={60} />
              </TeamImage>
              <TeamInfo>
                <TeamName>Medicinska advisory board</TeamName>
                <TeamRole>Expertstöd</TeamRole>
                <TeamSpecialty>Kontinuerlig dialog med specialistläkare och kliniker</TeamSpecialty>
              </TeamInfo>
            </TeamCard>

            <TeamCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TeamImage>
                <Activity size={60} />
              </TeamImage>
              <TeamInfo>
                <TeamName>Rese- och logistikgruppen</TeamName>
                <TeamRole>Planering och support</TeamRole>
                <TeamSpecialty>Koordinering av reseplaner, avtal och uppföljning</TeamSpecialty>
              </TeamInfo>
            </TeamCard>

            <TeamCard
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TeamImage>
                <Users size={60} />
              </TeamImage>
              <TeamInfo>
                <TeamName>Event- och partnerskapsteamet</TeamName>
                <TeamRole>Affärsutveckling</TeamRole>
                <TeamSpecialty>Hälsomässor, workshops och partnerrelationer i Europa</TeamSpecialty>
              </TeamInfo>
            </TeamCard>
          </TeamGrid>
        </Container>
      </Section>

      <CertificationsSection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>Vårt nätverk och vår kompetens</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Ett starkt partnernätverk, lång erfarenhet av internationella projekt och 
            kommande evenemang säkerställer att patienter får rätt vård i rätt tid.
          </SectionSubtitle>

          <CertGrid>
            <CertCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CertIcon>
                <Shield size={30} />
              </CertIcon>
              <h3 style={{ marginBottom: '1rem' }}>Certifierade vårdpartners</h3>
              <p>Över 100 anslutna sjukhus och kliniker i Turkiet och Europa med 
              dokumenterad expertis.</p>
            </CertCard>

            <CertCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CertIcon>
                <Award size={30} />
              </CertIcon>
              <h3 style={{ marginBottom: '1rem' }}>EU-projekt sedan 2005</h3>
              <p>Gedigen erfarenhet av internationella samarbeten, finansiering och 
              projektledning inom hälsa.</p>
            </CertCard>

            <CertCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CertIcon>
                <Star size={30} />
              </CertIcon>
              <h3 style={{ marginBottom: '1rem' }}>Hälsomässor och evenemang</h3>
              <p>Planerade aktiviteter i Sverige och Europa som för samman 
              patienter, experter och vårdaktörer.</p>
            </CertCard>
          </CertGrid>
        </Container>
      </CertificationsSection>
    </AboutContainer>
  );
};

export default AboutPage;