import React, { useState } from 'react';
import sv from '../../locals/sv.json';
import en from '../../locals/en.json';
import tr from '../../locals/tr.json';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';
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

  // Use LanguageContext for instant language switching
  const { language } = useLanguage();
  const t = language === 'tr' ? tr : language === 'en' ? en : sv;

  const specialties = [
    {
      id: 'skonhet',
      name: t.booking_12,
      description: t.booking_13,
      icon: Sparkles,
      highlights: [t.booking_14, t.booking_15, t.booking_16]
    },
    {
      id: 'medicin',
      name: t.booking_17,
      description: t.booking_18,
      icon: Shield,
      highlights: [t.booking_19, t.booking_20, t.booking_21]
    },
    {
      id: 'relax',
      name: t.booking_22,
      description: t.booking_23,
      icon: Smile,
      highlights: [t.booking_24, t.booking_25, t.booking_26]
    },
    {
      id: 'kirurgi',
      name: t.booking_27,
      description: t.booking_28,
      icon: Scissors,
      highlights: [t.booking_29, t.booking_30, t.booking_31]
    }
  ];

  const onSubmit = async (data: BookingFormData) => {
    // Skapa ett slumpmässigt 4-siffrigt ärendenummer
    const caseNumber = Math.floor(1000 + Math.random() * 9000);

    // Skapa e-postmeddelande
    const emailParams = {
      to_email: 'info@hcpab.se',
      subject: `Ny bokning #${caseNumber}`,
      message: `En ny bokning har gjorts via HealthCarePoint.\n\nÄrendenummer: ${caseNumber}\n\n` +
        `Förnamn: ${data.firstName}\n` +
        `Efternamn: ${data.lastName}\n` +
        `E-post: ${data.email}\n` +
        `Telefon: ${data.phone}\n` +
        `Personnummer: ${data.personnummer}\n` +
        `Tjänst: ${data.specialty}\n` +
        `Läkare: ${data.doctor || '-'}\n` +
        `Datum: ${data.date || '-'}\n` +
        `Tid: ${data.time || '-'}\n` +
        `Försäkring: ${data.insurance || '-'}\n` +
        `Första besök: ${data.firstVisit ? 'Ja' : 'Nej'}\n` +
        `Önskemål/mål: ${data.reason || '-'}\n`,
    };

    // Skicka e-post via EmailJS
    try {
      await emailjs.send(
        'default_service', // Byt till din EmailJS service ID
        'template_bokning', // Byt till din EmailJS template ID
        emailParams,
        'user_xxxxxxxxxxxxxxxx' // Byt till din EmailJS user/public key
      );
      setIsSubmitted(true);
    } catch (error) {
      alert('Kunde inte skicka bokningen. Försök igen senare.');
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSpecialtySelect = (specialtyId: string) => {
    if (selectedSpecialty === specialtyId) {
      setSelectedSpecialty('');
      setValue('specialty', '');
    } else {
      setSelectedSpecialty(specialtyId);
      setValue('specialty', specialtyId);
    }
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
              <h2>{t.booking_54}</h2>
              <p>
                {t.booking_55}
                <br />
                {t.booking_56}
              </p>
              <Button
                variant="secondary"
                onClick={() => window.location.href = '/'}
                style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', border: 'none' }}
              >
                {t.booking_57}
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
            {t.booking_1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.booking_2}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <BookingCard>
            <StepIndicator>
              <Step active={currentStep === 1} completed={currentStep > 1}>
                <span>{t.booking_3}</span>
                <span>{t.booking_4}</span>
              </Step>
              <Step active={currentStep === 2} completed={currentStep > 2}>
                <span>{t.booking_5}</span>
                <span>{t.booking_6}</span>
              </Step>
              <Step active={currentStep === 3} completed={currentStep > 3}>
                <span>{t.booking_7}</span>
                <span>{t.booking_8}</span>
              </Step>
            </StepIndicator>

            <StepContent>
              {currentStep === 1 && (
                <div>
                  <StepTitle>{t.booking_10}</StepTitle>
                  <StepSubtitle>
                    {t.booking_11}
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
                      {t.booking_32} <ArrowRight size={20} />
                    </Button>
                  </ButtonGroup>
                </div>
              )}

              {currentStep === 2 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <StepTitle>{t.booking_34}</StepTitle>
                  <StepSubtitle>
                    {t.booking_35}
                  </StepSubtitle>

                  <input
                    type="hidden"
                    value={selectedSpecialty}
                    {...register('specialty', { required: t.booking_10 })}
                  />

                  <FormGrid>
                    <FormGroup>
                      <Label>{t.booking_36}</Label>
                      <Input
                        type="text"
                        hasError={!!errors.firstName}
                        {...register('firstName', { required: t.booking_36 })}
                      />
                      {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_37}</Label>
                      <Input
                        type="text"
                        hasError={!!errors.lastName}
                        {...register('lastName', { required: t.booking_37 })}
                      />
                      {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_38}</Label>
                      <Input
                        type="email"
                        hasError={!!errors.email}
                        {...register('email', { 
                          required: t.booking_38,
                          pattern: { value: /^\S+@\S+$/i, message: 'Ogiltig e-postadress' }
                        })}
                      />
                      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_39}</Label>
                      <Input
                        type="tel"
                        hasError={!!errors.phone}
                        {...register('phone', { required: t.booking_39 })}
                      />
                      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_40}</Label>
                      <Input
                        type="text"
                        placeholder={t.booking_41}
                        hasError={!!errors.personnummer}
                        {...register('personnummer', { required: t.booking_40 })}
                      />
                      {errors.personnummer && <ErrorMessage>{errors.personnummer.message}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_42}</Label>
                      <Select {...register('insurance')}>
                        <option value="">{t.booking_43}</option>
                        <option value="folksam">Folksam</option>
                        <option value="if">If</option>
                        <option value="trygg-hansa">Trygg-Hansa</option>
                        <option value="länsförsäkringar">Länsförsäkringar</option>
                        <option value="annat">Annat</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_44}</Label>
                      <Input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        {...register('date')}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>{t.booking_46}</Label>
                      <Select {...register('time')}>
                        <option value="">{t.booking_47}</option>
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
                      <Label>{t.booking_48}</Label>
                      <TextArea
                        placeholder={t.booking_49}
                        {...register('reason')}
                      />
                    </FormGroup>
                  </FormGrid>

                  <CheckboxGroup>
                    <input
                      type="checkbox"
                      {...register('firstVisit')}
                    />
                    <label>{t.booking_50}</label>
                  </CheckboxGroup>

                  <ButtonGroup>
                    <Button variant="secondary" type="button" onClick={prevStep}>
                      <ArrowLeft size={20} /> {t.booking_51}
                    </Button>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? t.booking_52 : t.booking_52}
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