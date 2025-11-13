import React from 'react';
import sv from '../../locals/sv.json';
import en from '../../locals/en.json';
import tr from '../../locals/tr.json';
import { useLanguage } from '../../context/LanguageContext';
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
  // Use LanguageContext for instant language switching
  const { language } = useLanguage();
  const t = language === 'tr' ? tr : language === 'en' ? en : sv;

  return (
    <AboutContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.about_1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.about_2}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <StoryGrid>
            <StoryContent>
              <h3>{t.about_3}</h3>
              <p>{t.about_4}</p>
              <p>{t.about_5}</p>
            </StoryContent>
            <StoryImageWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpecialistsImageSoft
                src={SpecialistsImage}
                alt={t.about_6}
              />
            </StoryImageWrapper>
          </StoryGrid>

          <StoryGrid style={{ flexDirection: 'row-reverse' }}>
            <StoryContent>
              <h3>{t.about_7}</h3>
              <p>{t.about_8}</p>
              <p>{t.about_9}</p>
            </StoryContent>
            <StoryImageWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StoryImage
                src={FamilyImage}
                alt={t.about_10}
              />
            </StoryImageWrapper>
          </StoryGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>{t.about_11}</SectionTitle>
          <SectionSubtitle>
            {t.about_12}
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
              <ValueTitle>{t.about_13}</ValueTitle>
              <ValueDescription>
                {t.about_14}
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
              <ValueTitle>{t.about_15}</ValueTitle>
              <ValueDescription>
                {t.about_16}
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
              <ValueTitle>{t.about_17}</ValueTitle>
              <ValueDescription>
                {t.about_18}
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
              <ValueTitle>{t.about_19}</ValueTitle>
              <ValueDescription>
                {t.about_20}
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
              <ValueTitle>{t.about_21}</ValueTitle>
              <ValueDescription>
                {t.about_22}
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
              <ValueTitle>{t.about_23}</ValueTitle>
              <ValueDescription>
                {t.about_24}
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>{t.about_25}</SectionTitle>
          <SectionSubtitle>
            {t.about_26}
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
                <TeamName>{t.about_27}</TeamName>
                <TeamRole>{t.about_28}</TeamRole>
                <TeamSpecialty>{t.about_29}</TeamSpecialty>
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
                <TeamName>{t.about_30}</TeamName>
                <TeamRole>{t.about_31}</TeamRole>
                <TeamSpecialty>{t.about_32}</TeamSpecialty>
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
                <TeamName>{t.about_33}</TeamName>
                <TeamRole>{t.about_34}</TeamRole>
                <TeamSpecialty>{t.about_35}</TeamSpecialty>
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
                <TeamName>{t.about_36}</TeamName>
                <TeamRole>{t.about_37}</TeamRole>
                <TeamSpecialty>{t.about_38}</TeamSpecialty>
              </TeamInfo>
            </TeamCard>
          </TeamGrid>
        </Container>
      </Section>

      <CertificationsSection>
        <Container>
          <SectionTitle style={{ color: 'white' }}>{t.about_39}</SectionTitle>
          <SectionSubtitle style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {t.about_40}
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
              <h3 style={{ marginBottom: '1rem' }}>{t.about_41}</h3>
              <p>{t.about_42}</p>
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
              <h3 style={{ marginBottom: '1rem' }}>{t.about_43}</h3>
              <p>{t.about_44}</p>
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
              <h3 style={{ marginBottom: '1rem' }}>{t.about_43}</h3>
              <p>{t.about_44}</p>
            </CertCard>
          </CertGrid>
        </Container>
      </CertificationsSection>
    </AboutContainer>
  );
};

export default AboutPage;