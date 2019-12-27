import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCardIcon from './ProjectCardIcon';

const ProjectCard = ({ project, openProjectModal }) => (
  <Container onClick={() => openProjectModal(project)}>
    <Img
      fluid={project.logo.childImageSharp.fluid}
      alt={project.name}
    />
    <TeckStackWrapper>
      <ProjectTitle>{project.name}</ProjectTitle>
      {project.frameworks.map((framework) => <ProjectCardIcon framework={framework} />)}
    </TeckStackWrapper>
  </Container>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.oneOfType([PropTypes.object]).isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    frameworks: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      logo: PropTypes.oneOfType([PropTypes.object]).isRequired,
    }),
  }).isRequired,
  openProjectModal: PropTypes.func.isRequired,
};

const Container = styled.div`
  background-color: #3B4B6A;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: #243459;
    transform: scale(1.1, 1.1);
    box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), -5px -5px 30px 15px rgba(0,0,0,0.22);
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem;
  @media(min-width: 0px) {
    width: 90%;
  }
  @media(min-width: 800px) {
    width: 45%;
  }
  @media(min-width: 1200px) {
    width: 30%;
  }
`;

const TeckStackWrapper = styled.div`
   background-color: #243459;
   padding: 0.5rem;
   display: flex;
   flex:1;
   flex-direction: row;
   align-items: center;
   transition: 0.4s;
   ${Container}:hover &{
    background-color: #19243d;
  }
`;

const ProjectTitle = styled.div`
  flex:1;
  font-family: Staatliches;
  color: #E2E6EC;
  
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-left: 2rem;
  @media(min-width: 0px) {
    font-size: 1.2rem;
  }
  @media(min-width: 450px) {
    font-size: 1.8rem;
  }
`;

export default ProjectCard;
