import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.success} 100%);
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: ${props => props.theme.colors.textLight};
    margin-bottom: 0.25rem;
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

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
  background: ${props => props.theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 1rem;
  border: 2px solid ${props => props.hasError ? '#ef4444' : '#e5e7eb'};
  border-radius: 12px;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.primary};
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorMessage = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, ${props => props.theme.colors.success} 100%);
  color: ${props => props.theme.colors.white};
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MapSection = styled.div`
  background: #f8fafc;
  padding: 4rem 0;
`;

const MapPlaceholder = styled.div`
  width: 600px;
  max-width: 100%;
  height: 400px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-size: 1.2rem;
  margin: 2rem auto 0 auto;
`;

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <ContactContainer>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kontakta oss
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vi finns här för att hjälpa dig. Kontakta oss för frågor om vård, 
            bokningar eller allmän information.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <InfoCard
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <InfoIcon>
                  <Phone size={24} />
                </InfoIcon>
                <InfoContent>
                  <h3>Telefon</h3>
                  <p><strong>Växel:</strong> +46723030125</p>
                  
                </InfoContent>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <InfoIcon>
                  <Mail size={24} />
                </InfoIcon>
                <InfoContent>
                  <h3>E-post</h3>
                  <p><strong>Allmänt:</strong> info@hcpab.se</p>
                </InfoContent>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <InfoIcon>
                  <MapPin size={24} />
                </InfoIcon>
                <InfoContent>
                  <h3>Besöksadress</h3>
                  <p>Blockvägen 21</p>
                  <p>147 54 Tumba</p>
                  <p>Sverige</p>
                </InfoContent>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <InfoIcon>
                  <Clock size={24} />
                </InfoIcon>
                <InfoContent>
                  <h3>Öppettider</h3>
                  <p><strong>Mån-Fre:</strong> 09:00 - 15:00</p>
                  <p><strong>Lördag:</strong> Stängt</p>
                  <p><strong>Söndag:</strong> Stängt</p>
                 
                </InfoContent>
              </InfoCard>
            </ContactInfo>

            <div>
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={24} />
                  <span>Tack för ditt meddelande! Vi återkommer inom 24 timmar.</span>
                </SuccessMessage>
              )}

              <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>Skicka meddelande</FormTitle>
                
                <FormGrid>
                  <FormGroup>
                    <Label htmlFor="name">Namn *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ditt fullständiga namn"
                      hasError={!!errors.name}
                      {...register('name', { 
                        required: 'Namn är obligatoriskt',
                        minLength: { value: 2, message: 'Namnet måste vara minst 2 tecken' }
                      })}
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="din@email.se"
                      hasError={!!errors.email}
                      {...register('email', { 
                        required: 'E-post är obligatorisk',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Ogiltig e-postadress'
                        }
                      })}
                    />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="070-123 45 67"
                      {...register('phone')}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="subject">Ämne *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Vad gäller ditt meddelande?"
                      hasError={!!errors.subject}
                      {...register('subject', { 
                        required: 'Ämne är obligatoriskt',
                        minLength: { value: 5, message: 'Ämnet måste vara minst 5 tecken' }
                      })}
                    />
                    {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup className="full-width">
                    <Label htmlFor="message">Meddelande *</Label>
                    <TextArea
                      id="message"
                      placeholder="Beskriv ditt ärende eller dina frågor..."
                      hasError={!!errors.message}
                      {...register('message', { 
                        required: 'Meddelande är obligatoriskt',
                        minLength: { value: 10, message: 'Meddelandet måste vara minst 10 tecken' }
                      })}
                    />
                    {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                  </FormGroup>
                </FormGrid>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{ animation: 'spin 1s linear infinite', width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%' }} />
                      Skickar...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Skicka meddelande
                    </>
                  )}
                </SubmitButton>
              </ContactForm>
            </div>
          </ContactGrid>
        </Container>
      </Section>

      <MapSection>
        <Container>
          <h2 style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Hitta till oss
          </h2>
          <p style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            color: '#6b7280',
            marginBottom: '2rem'
          }}>
            Vi finns i Tumba med goda kommunikationer och smidiga parkeringsmöjligheter.
          </p>
          <MapPlaceholder style={{ justifyContent: 'center' }}>
            <iframe
              title="Karta över vårt vårdcenter"
              src="https://www.google.com/maps?q=Blockv%C3%A4gen+21,+147+54+Tumba&output=embed"
              width="600"
              height="400"
              style={{ border: 0, borderRadius: '20px', maxWidth: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapPlaceholder>
        </Container>
      </MapSection>
    </ContactContainer>
  );
};

export default ContactPage;