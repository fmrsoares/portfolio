import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaGithub, FaPortrait, FaLinkedin } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';


const ContactBar = ({ contacts }) => (
  <ContactList>
    <ContactEmail href={`mailto:${contacts.email}`}>
      <ContactLabel>Email</ContactLabel>
      <MdMailOutline color="white" size={30} style={{ marginLeft: '1rem' }} />
    </ContactEmail>
    <ContactItem
      backgroundColor="#737883"
      translateValue={4.2}
      onClick={() => {
        const win = window.open(contacts.cvLink, '_blank');
        win.focus();
      }}
    >
      <ContactLabel>Resume</ContactLabel>
      <FaPortrait color="white" size={30} style={{ marginLeft: '1rem' }} />
    </ContactItem>
    <ContactItem
      translateValue={4}
      onClick={() => {
        const win = window.open(contacts.githubLink, '_blank');
        win.focus();
      }}
    >
      <ContactLabel>Github</ContactLabel>
      <FaGithub color="white" size={30} style={{ marginLeft: '1rem' }} />
    </ContactItem>
    <ContactItem
      backgroundColor="#0077b5"
      translateValue={4.8}
      onClick={() => {
        const win = window.open(contacts.linkedInLink, '_blank');
        win.focus();
      }}
    >
      <ContactLabel>LinkedIn</ContactLabel>
      <FaLinkedin color="white" size={30} style={{ marginLeft: '1rem' }} />
    </ContactItem>
  </ContactList>
);

ContactBar.propTypes = {
  contacts: PropTypes.shape({
    githubLink: PropTypes.string.isRequired,
    linkedInLink: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cvLink: PropTypes.string.isRequired,
  }).isRequired,
};

const ContactLabel = styled.div`
    font-family: Staatliches;
    font-size: 1rem;
    color: #E2E6EC;
    letter-spacing: 1px;
`;

const ContactList = styled.div`
    display: block;
    position: absolute;
    position: fixed;
    top: 50%;
    left: -6.5rem;
    z-index: 700;
    transform: translateY(-50%);
`;

const ContactEmail = styled.a`
  background-color: #EBB651;
  border: none;
  transition: all .3s;
  padding: 0.8rem;
  align-items: center;
  justify-items: center;
  justify-content: flex-end;
  display: flex;
  transition: all 0.4s cubic-bezier(.5,.5,.5,1.5);
  outline: none;
  text-decoration: none;
  &:hover {
    transform: translateX(3.5rem);
  }
`;


const ContactItem = styled.button`
  background-color: ${({ backgroundColor = '#333' }) => backgroundColor};
  border: none;
  transition: all .3s;
  padding: 0.8rem;
  width: 10rem;
  align-items: center;
  justify-items: center;
  justify-content: flex-end;
  display: flex;
  transition: all 0.4s cubic-bezier(.5,.5,.5,1.5);
  outline: none;
  &:hover {
    transform: translateX(${({ translateValue = 0 }) => translateValue}rem);
  }
`;

export default ContactBar;
