import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../util/translations';
import style from './LanguageSwitcher.module.scss';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '/img/flags/en.svg' },
  { code: 'uk', name: 'Українська', flag: '/img/flags/uk.svg' },
  { code: 'bg', name: 'Български', flag: '/img/flags/bg.svg' },
  { code: 'pl', name: 'Polski', flag: '/img/flags/pl.svg' },
  { code: 'it', name: 'Italiano', flag: '/img/flags/it.svg' },
  { code: 'fr', name: 'Français', flag: '/img/flags/fr.svg' },
];

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style.languageSwitcher} ref={dropdownRef}>
      <button
        className={style.currentLanguage}
        onClick={toggleDropdown}
        type="button"
        aria-label={`Select language, current: ${currentLanguage.name}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={20}
          height={15}
          className={style.flag}
        />
        <span className={style.languageName}>{currentLanguage.code.toUpperCase()}</span>
        <svg
          className={`${style.arrow} ${isOpen ? style.arrowUp : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={style.dropdown} role="listbox" aria-label="Select language">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${style.dropdownItem} ${language === lang.code ? style.active : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              type="button"
              role="option"
              aria-selected={language === lang.code}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className={style.flag}
              />
              <span className={style.languageName}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
