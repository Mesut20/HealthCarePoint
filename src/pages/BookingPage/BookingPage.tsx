import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Shield,
  Smile,
  Scissors
} from 'lucide-react';

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  personnummer: string;
  specialty: string;
  doctor: string;
  date: string;
  time: string;
  reason: string;
  firstVisit: boolean;
  insurance: string;
}

const BookingContainer = styled.div`
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
  max-width: 1000px;
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

const BookingCard = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #f8fafc;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const Step = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => 
    props.completed ? props.theme.colors.accent :
    props.active ? props.theme.colors.primary : '#e5e7eb'
  };
  color: ${props => 
    props.completed || props.active ? props.theme.colors.white : '#6b7280'
  };
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const StepContent = styled.div`
  padding: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const StepTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const StepSubtitle = styled.p`
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SpecialtyCard = styled.div<{ selected: boolean }>`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : '#e5e7eb'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${props => props.selected ? 'rgba(37, 99, 235, 0.05)' : props.theme.colors.white};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: rgba(37, 99, 235, 0.05);
  }

  h3 {
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.25rem;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
  }

  ul {
    margin-top: 0.75rem;
    padding-left: 1.2rem;
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
  }

  li {
    margin-bottom: 0.35rem;
  }
`;

const SpecialtyIcon = styled.div<{ selected: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.selected ? 
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.secondary} 100%)` :
    '#e5e7eb'
  };
  color: ${props => props.selected ? props.theme.colors.white : '#6b7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const Select = styled.select<{ hasError?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${props => props.theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
  border-radius: 12px;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.primary};
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }

  label {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Button = styled(motion.button)<{ variant: 'primary' | 'secondary' }>`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: none;

  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.secondary} 100%);
    color: ${props.theme.colors.white};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
    }
  ` : `
    background: transparent;
    color: ${props.theme.colors.text};
    border: 2px solid #e5e7eb;
    
    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
`;

const ConfirmationCard = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.success} 100%);
  color: ${props => props.theme.colors.white};
  padding: 3rem;
  text-align: center;
  border-radius: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<BookingFormData>();

  const specialties = [
    {
      id: 'skonhet',
      name: 'Skönhet',
      description: 'Skräddarsydd skönhetskonsultation för individuella resultat.',
      icon: Sparkles,
      highlights: [
        'Individuellt anpassad rådgivning med fokus på dina mål.',
        'Experthjälp för att navigera bland behandlingar och produkter.',
        'Personlig vägledning för stärkt självförtroende och välmående.'
      ]
    },
    {
      id: 'medicin',
      name: 'Medicin',
      description: 'Avancerade medicinska behandlingar av erfarna specialistläkare.',
      icon: Shield,
      highlights: [
        'Behandlingar för hudtillstånd, åldrande och medicinska behov.',
        'Tillgång till den senaste medicinska tekniken och metoderna.',
        'Planer som anpassas efter individuella behov och mål.'
      ]
    },
    {
      id: 'relax',
      name: 'Relax',
      description: 'Spa- och wellnessupplevelser för återhämtning och balans.',
      icon: Smile,
      highlights: [
        'Personlig omvårdnad från vårt dedikerade spa-team.',
        'Skräddarsydda ritualer för välbefinnande och sinnesfrid.',
        'Möjlighet att koppla av från vardagens stress och påfrestningar.'
      ]
    },
    {
      id: 'kirurgi',
      name: 'Kirurgi',
      description: 'Kirurgiska skönhetsbehandlingar med trygg uppföljning.',
      icon: Scissors,
      highlights: [
        'Tillgång till avancerade kirurgiska tekniker och metoder.',
        'Personlig konsultation och behandlingsplanering utifrån dina mål.',
        'Professionell eftervård för ett säkert och framgångsrikt resultat.'
      ]
    }
  ];

  const onSubmit = async (data: BookingFormData) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Booking data:', data);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSpecialtySelect = (specialtyId: string) => {
    setSelectedSpecialty(specialtyId);
    setValue('specialty', specialtyId);
  };

  if (isSubmitted) {
    return (
      <BookingContainer>
        <Section>
          <Container>
            <ConfirmationCard
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={80} style={{ margin: '0 auto 2rem' }} />
              <h2>Bokning bekräftad!</h2>
              <p>
                Din bokning har mottagits och vi kommer att kontakta dig inom 24 timmar 
                för att bekräfta din tid. Ett bekräftelsemeddelande har skickats till din e-post.
              </p>
              <Button
                variant="secondary"
                onClick={() => window.location.href = '/'}
                style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: 'none' }}
              >
                Tillbaka till startsidan
              </Button>
            </ConfirmationCard>
          </Container>
        </Section>
      </BookingContainer>
    );
  }

  return (
    <BookingContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Boka din behandling
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Välj mellan skönhet, medicin, relax och kirurgi. Vi återkommer inom 24 timmar 
            för att bekräfta din bokning och planera nästa steg tillsammans.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <BookingCard>
            <StepIndicator>
              <Step active={currentStep === 1} completed={currentStep > 1}>
                <span>1</span>
                <span>Välj behandling</span>
              </Step>
              <Step active={currentStep === 2} completed={currentStep > 2}>
                <span>2</span>
                <span>Kontaktuppgifter</span>
              </Step>
              <Step active={currentStep === 3} completed={currentStep > 3}>
                <span>3</span>
                <span>Bekräftelse</span>
              </Step>
            </StepIndicator>

            <StepContent>
              {currentStep === 1 && (
                <div>
                  <StepTitle>Välj din tjänst</StepTitle>
                  <StepSubtitle>
                    Börja med att välja den kategori som bäst matchar dina behov så tar vi fram rätt lösning tillsammans.
                  </StepSubtitle>
                  
                  <SpecialtyGrid>
                    {specialties.map((specialty) => {
                      const IconComponent = specialty.icon;
                      const isSelected = selectedSpecialty === specialty.id;
                      
                      return (
                        <SpecialtyCard
                          key={specialty.id}
                          selected={isSelected}
                          onClick={() => handleSpecialtySelect(specialty.id)}
                        >
                          <SpecialtyIcon selected={isSelected}>
                            <IconComponent size={24} />
                          </SpecialtyIcon>
                          <div style={{ flex: 1 }}>
                            <h3>{specialty.name}</h3>
                            <p>{specialty.description}</p>
                            <ul>
                              {specialty.highlights.map(highlight => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </SpecialtyCard>
                      );
                    })}
                  </SpecialtyGrid>

                  <ButtonGroup>
                    <div></div>
                    <Button
                      variant="primary"
                      onClick={nextStep}
                      disabled={!selectedSpecialty}
                    >
                      Nästa <ArrowRight size={20} />
                    </Button>
                  </ButtonGroup>
                </div>
              )}

              {currentStep === 2 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <StepTitle>Kontaktuppgifter</StepTitle>
                  <StepSubtitle>
                    Fyll i dina uppgifter så kontaktar vi dig med förslag på upplägg för den tjänst du har valt.
                  </StepSubtitle>

                  <input
                    type="hidden"
                    value={selectedSpecialty}
                    {...register('specialty', { required: 'Välj en tjänst innan du skickar bokningen' })}
                  />

                  <FormGrid>
                    <FormGroup>
                      <Label>Förnamn *</Label>
                      <Input
                        type="text"
                        hasError={!!errors.firstName}
                        {...register('firstName', { required: 'Förnamn är obligatoriskt' })}
                      />
                      {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>Efternamn *</Label>
                      <Input
                        type="text"
                        hasError={!!errors.lastName}
                        {...register('lastName', { required: 'Efternamn är obligatoriskt' })}
                      />
                      {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>E-post *</Label>
                      <Input
                        type="email"
                        hasError={!!errors.email}
                        {...register('email', { 
                          required: 'E-post är obligatorisk',
                          pattern: { value: /^\S+@\S+$/i, message: 'Ogiltig e-postadress' }
                        })}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>Telefon *</Label>
                      <Input
                        type="tel"
                        hasError={!!errors.phone}
                        {...register('phone', { required: 'Telefonnummer är obligatoriskt' })}
                      />
                      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>Personnummer *</Label>
                      <Input
                        type="text"
                        placeholder="YYYYMMDD-XXXX"
                        hasError={!!errors.personnummer}
                        {...register('personnummer', { required: 'Personnummer är obligatoriskt' })}
                      />
                      {errors.personnummer && <ErrorMessage>{errors.personnummer.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>Försäkring</Label>
                      <Select {...register('insurance')}>
                        <option value="">Välj försäkring</option>
                        <option value="folksam">Folksam</option>
                        <option value="if">If</option>
                        <option value="trygg-hansa">Trygg-Hansa</option>
                        <option value="länsförsäkringar">Länsförsäkringar</option>
                        <option value="annat">Annat</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <Label>Önskad datum</Label>
                      <Input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        {...register('date')}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Önskad tid</Label>
                      <Select {...register('time')}>
                        <option value="">Välj tid</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                      </Select>
                    </FormGroup>

                    <FormGroup className="full-width">
                      <Label>Önskemål och mål</Label>
                      <TextArea
                        placeholder="Berätta om dina mål, önskemål och frågor inför den valda tjänsten..."
                        {...register('reason')}
                      />
                    </FormGroup>
                  </FormGrid>

                  <CheckboxGroup>
                    <input
                      type="checkbox"
                      {...register('firstVisit')}
                    />
                    <label>Detta är mitt första besök via HealthCarePoint</label>
                  </CheckboxGroup>

                  <ButtonGroup>
                    <Button variant="secondary" type="button" onClick={prevStep}>
                      <ArrowLeft size={20} /> Tillbaka
                    </Button>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Skickar...' : 'Skicka bokning'}
                      <CheckCircle size={20} />
                    </Button>
                  </ButtonGroup>
                </form>
              )}
            </StepContent>
          </BookingCard>
        </Container>
      </Section>
    </BookingContainer>
  );
};

export default BookingPage;