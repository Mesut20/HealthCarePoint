import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Heart,
  Stethoscope,
  Award,
  Users,
  Clock
} from 'lucide-react';

const NewsContainer = styled.div`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MainNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const NewsCard = styled(motion.article)`
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

const NewsImage = styled.div<{ imageType: string }>`
  width: 100%;
  height: 300px;
  background: ${props => {
    switch (props.imageType) {
      case 'research':
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'award':
        return 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
      case 'technology':
        return 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
      default:
        return `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.secondary} 100%)`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20v20l-8-8-8 8 8-8 8 8z'/%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
  }

  svg {
    z-index: 2;
    position: relative;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease;
  }

  &:hover {
    &::before {
      background: rgba(0, 0, 0, 0.3);
    }
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const NewsContent = styled.div`
  padding: 2rem;
`;

const NewsCategory = styled.span`
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const NewsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  margin: 1rem 0;
  color: ${props => props.theme.colors.text};
  line-height: 1.3;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const NewsExcerpt = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.accent};
    gap: 1rem;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SidebarCard = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
`;

const SmallNewsItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const SmallNewsImage = styled.div<{ index: number }>`
  width: 80px;
  height: 80px;
  background: ${props => {
    const gradients = [
      'linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%)',
      'linear-gradient(135deg, #ffd3a5 0%, #fd9853 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    ];
    return gradients[props.index % gradients.length];
  }};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SmallNewsContent = styled.div`
  flex: 1;

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
    font-size: 0.9rem;
    line-height: 1.3;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      category: "Nya behandlingar",
      title: "Lansering av avancerad HydraFacial-teknologi",
      excerpt: "Vi introducerar den senaste HydraFacial MD-teknologin för djuprengöring och hudföryngring. Behandlingen kombinerar exfoliering, extraktion och återfuktning för omedelbart synliga resultat utan återhämtningstid.",
      author: "Dr. Sofia Bergström",
      date: "2025-11-05",
      image: "research"
    },
    {
      id: 2,
      category: "Utmärkelser",
      title: "Årets Skönhetsklinik 2025",
      excerpt: "Vi är stolta över att ha blivit utsedda till Årets Skönhetsklinik 2025 av Svenska Estetikförbundet. Utmärkelsen baseras på våra höga säkerhetsstandarder och enastående behandlingsresultat.",
      author: "Emma Lindqvist",
      date: "2025-11-01",
      image: "award"
    },
    {
      id: 3,
      category: "Innovation",
      title: "Ny laserteknologi för hårborttagning",
      excerpt: "Vi investerar i den allra senaste lasertekologin för permanent hårborttagning. Den nya utrustningen ger snabbare behandlingar och bättre resultat för alla hudtyper och hårfärger.",
      author: "Dr. Alexander Holm",
      date: "2025-10-28",
      image: "technology"
    }
  ];

  const sidebarNews = [
    {
      title: "Utökade öppettider för bokningar",
      date: "2025-11-03",
      icon: Clock
    },
    {
      title: "Ny specialbehandling för anti-aging",
      date: "2025-10-30",
      icon: Award
    },
    {
      title: "Fler certifierade estetikspecialister",
      date: "2025-10-25",
      icon: Users
    },
    {
      title: "Kundnöjdhet når rekordnivåer - 98%",
      date: "2025-10-20",
      icon: Heart
    }
  ];

  return (
    <NewsContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nyheter & Aktuellt
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Håll dig uppdaterad med de senaste nyheterna från HealthCarePoint Estetik & Skönhetsklinik, 
            nya behandlingar och trender inom estetisk medicin.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <NewsGrid>
            <MainNews>
              {newsArticles.map((article, index) => (
                <NewsCard
                  key={article.id}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsImage imageType={article.image}>
                    {article.image === 'research' && <Stethoscope size={80} />}
                    {article.image === 'award' && <Award size={80} />}
                    {article.image === 'technology' && <Heart size={80} />}
                  </NewsImage>
                  <NewsContent>
                    <NewsCategory>{article.category}</NewsCategory>
                    <NewsTitle>{article.title}</NewsTitle>
                    <NewsMeta>
                      <MetaItem>
                        <User size={16} />
                        <span>{article.author}</span>
                      </MetaItem>
                      <MetaItem>
                        <Calendar size={16} />
                        <span>{new Date(article.date).toLocaleDateString('sv-SE')}</span>
                      </MetaItem>
                    </NewsMeta>
                    <NewsExcerpt>{article.excerpt}</NewsExcerpt>
                    <ReadMoreButton>
                      Läs mer <ArrowRight size={16} />
                    </ReadMoreButton>
                  </NewsContent>
                </NewsCard>
              ))}
            </MainNews>

            <Sidebar>
              <SidebarCard>
                <SidebarTitle>Senaste nyheterna</SidebarTitle>
                {sidebarNews.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <SmallNewsItem key={index}>
                      <SmallNewsImage index={index}>
                        <IconComponent size={24} />
                      </SmallNewsImage>
                      <SmallNewsContent>
                        <h4>{item.title}</h4>
                        <p>
                          <Calendar size={12} />
                          {new Date(item.date).toLocaleDateString('sv-SE')}
                        </p>
                      </SmallNewsContent>
                    </SmallNewsItem>
                  );
                })}
              </SidebarCard>

              <SidebarCard>
                <SidebarTitle>Prenumerera på vårt nyhetsbrev</SidebarTitle>
                <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
                  Få de senaste nyheterna och hälsotipsen direkt i din inkorg.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input
                    type="email"
                    placeholder="Din e-postadress"
                    style={{
                      padding: '0.8rem',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                  <button
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Prenumerera
                  </button>
                </div>
              </SidebarCard>

              <SidebarCard>
                <SidebarTitle>Sociala medier</SidebarTitle>
                <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
                  Följ oss för dagliga hälsotips och uppdateringar.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    Facebook
                  </button>
                  <button style={{
                    background: '#0ea5e9',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    LinkedIn
                  </button>
                </div>
              </SidebarCard>
            </Sidebar>
          </NewsGrid>
        </Container>
      </Section>
    </NewsContainer>
  );
};

export default NewsPage;