import React from 'react';
import Modal from 'react-modal';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { FaEye, FaCode } from 'react-icons/fa';

Modal.setAppElement('#___gatsby');

const ProjectModal = ({ modalIsOpen, closeModal, project }) => (
  <StyledModal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel={project.name}
  >
    <Container>
      <ProjectLogo>
        <Img
          fluid={project.logo.childImageSharp.fluid}
          alt={project.name}
        />
      </ProjectLogo>
      <ProjectData>
        <ProjectModalClose onClick={closeModal}>
          <IoMdClose />
        </ProjectModalClose>
        <ProjectLabel>Project</ProjectLabel>
        <ProjectName>{project.name}</ProjectName>
        {project.tags.map((tag) => <ProjectTag>{tag}</ProjectTag>)}
        <ProjectLabelAbout>About</ProjectLabelAbout>
        <ProjectAbout>{project.description}</ProjectAbout>
        <ProjectButtons>
          <ProjectButton
            disabled={!project.demoLink}
            type="button"
            onClick={() => {
              const win = window.open(project.demoLink, '_blank');
              win.focus();
            }}
          >
            <FaEye />
            <ProjectButtonText>Demo</ProjectButtonText>
          </ProjectButton>
          <ProjectButton
            disabled
            type="button"
            onClick={() => {
              const win = window.open(project.githubLink, '_blank');
              win.focus();
            }}
          >
            <FaCode />
            <ProjectButtonText>Source</ProjectButtonText>
          </ProjectButton>
        </ProjectButtons>
      </ProjectData>
    </Container>
  </StyledModal>
);

ProjectModal.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

const ProjectButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProjectButtonText = styled.div`
  padding-left: 0.5rem;
`;

const ProjectButton = styled.button`
  display: flex;
  color: #22262a;
  font-family: Staatliches,sans-serif;
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: hsla(0,0%,100%,.8);
  border: none;
  cursor: pointer;
  transition: all .3s;
  align-items: center;
  justify-items: center;
  &:disabled {
    background-color: hsla(0,0%,50%,.3);
    &:hover {
      transform: scale(1);
    }
  }
  &:hover {
    transform: scale(1.2);
  }
`;
const ProjectAbout = styled.p`
    font-family: Inconsolata,sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #E2E6EC;
    overflow-y: scroll;
    white-space: pre-line;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
    }
    &::-webkit-scrollbar-track {
      background-color: #243459;
    }
`;

const ProjectLabelAbout = styled.div`
  font-family: Staatliches;
  font-size: 1.5rem;
  color: #9dadbd;
  letter-spacing: 1px;
  margin-top: 2rem;
`;

const ProjectTag = styled.div`
    display: inline-block;
    margin: .25rem;
    border: 2px solid #22262a;
    padding: .5rem;
    color: #E2E6EC;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: 1rem;
    font-family: Staatliches;
    `;
const ProjectModalClose = styled.button`
    position: absolute;
    padding: 0;
    top: 1.5rem;
    right: 1.5rem;
    background-color: transparent;
    border: none;
    color: #94a4b4;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s cubic-bezier(.175,.885,.32,1.275);
    &:hover {
      transform: scale(1.5);
    }
`;

const ProjectLabel = styled.div`
  font-family: Staatliches;
  font-size: 1.3rem;
  color: #9dadbd;
  letter-spacing: 1px;
`;

const ProjectName = styled.div`
  font-family: Staatliches;
  color: #E2E6EC;
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: lighter;
`;

const Container = styled.div`
  display: flex;
  background-color: #22262A;
  @media(min-width: 0px) {
    flex-direction: column;
  }
  @media(min-width: 1200px) {
    flex-direction: row;
  }
  `;

const ProjectLogo = styled.div`
  flex: 1.3;
  height: fit-content;
  width: 100%;
  align-self: center;
`;

const ProjectData = styled.div`
  background-color: #243459;
  flex: 1;
  padding: 1rem;
`;

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(34, 38, 42, 0.40);
  }

  &__content {
    outline: none;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    marginRight: -50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    width: 70rem;
    background-color: #737883;
    @media(min-width: 0px) {
      width: 15rem;
      height: auto;
      max-height: 80%;
    }
    @media(min-width: 500px) {
      width: 25rem;
      height: auto;
      max-height: 80%;
    }
    @media(min-width: 700px) {
      width: 40rem;
      height: auto;
      max-height: 80%;
    }
    @media(min-width: 1200px) {
      width: 70rem;
      height: auto;
      max-height: 80%;
    }
    &::-webkit-scrollbar {
      width: 6px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
    }
    &::-webkit-scrollbar-track {
      background-color: #243459;
    }
  }
`;

function ReactModalAdapter({ className, ...props }) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
}
ReactModalAdapter.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ProjectModal;
