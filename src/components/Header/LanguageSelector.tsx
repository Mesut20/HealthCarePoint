import React from 'react';
import styled from 'styled-components';

const LanguageSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-right: 1.5rem;
  margin-left: 3rem;
`;

const LanguageButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0 0 2px #d4af8c;
  }
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #eee;
`;

// Removed SelectedIndicator for static icons

const languages = [
  {
    code: 'tr',
    icon: require('../Assets/turkish icon.jpg'),
    alt: 'Turkish',
  },
  {
    code: 'sv',
    icon: require('../Assets/swedish icon.jpg'),
    alt: 'Swedish',
  },
  {
    code: 'en',
    icon: require('../Assets/english icon.jpg'),
    alt: 'English',
  },
];

interface Props {
  currentLang: string;
  onChange: (lang: string) => void;
}

const LanguageSelector: React.FC<Props> = ({ currentLang, onChange }) => {
  return (
    <LanguageSelectorContainer>
      {languages.map(lang => (
        <LanguageButton
          key={lang.code}
          selected={currentLang === lang.code}
          onClick={() => onChange(lang.code)}
          aria-label={lang.alt}
        >
          <Icon src={lang.icon} alt={lang.alt} />
        </LanguageButton>
      ))}
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
