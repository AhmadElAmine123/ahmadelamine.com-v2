import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ContactContainer,
  ContactTitle,
  ContactDescription,
  ContactForm,
  Input,
  TextArea,
  Button,
  SocialLinksContainer,
  SocialLink,
} from './Contact.styles';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
  
      if (!response.ok) {
        const responseData = await response.json();
        console.error('Error submitting contact form:', responseData.message);
        // Display an error message to the user
      } else {
        console.log('Contact form submitted successfully');
        // Display a success message and clear the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Display an error message to the user
    }
  };
  

  return (
    <ContactContainer>
      <ContactTitle>{t('contact.title')}</ContactTitle>
      <ContactDescription>
        {t('contact.description')}
      </ContactDescription>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="name">{t('contact.name')}</label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">{t('contact.email')}</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject">{t('contact.subject')}</label>
        <Input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="message">{t('contact.message')}</label>
        <TextArea
          rows={5}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>
        <Button type="submit">{t('contact.submit')}</Button>
      </ContactForm>
      <SocialLinksContainer>
        <SocialLink href="https://www.linkedin.com/in/ahmad-amine" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/AhmadElAmine123" target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
      </SocialLinksContainer>
    </ContactContainer>
  );
};

export default Contact;
