import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCardIcon from './ProjectCardIcon';

const ProjectCard = ({ project, openProjectModal }) => (
  <Container onClick={() => openProjectModal(project)}>
    <BorderHoverLeftTopMain />
    <BorderHoverRightTopMain />
    <BorderHoverLeftBottomMain />
    <BorderHoverRightBottomMain />
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
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
  position: relative;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  &:hover {
    transform: scale(0.98);
    border-left: 10px solid white;
    border-right: 10px solid white;
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

const BorderHoverLeftTopMain = styled.div`
  opacity: 0;
  border-top: 10px solid white;
  position: absolute;
  right: 0;
  left: 95%;
  top: 0;
  transition: 0.4s;
  ${Container}:hover &{
    opacity: 1;
  }
`;

const BorderHoverRightTopMain = styled.div`
  opacity: 0;
  border-bottom: 10px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 95%;
  transition: 0.4s;
  ${Container}:hover &{
    opacity: 1;
  }
`;

const BorderHoverLeftBottomMain = styled.div`
  opacity: 0;
  border-top: 10px solid white;
  position: absolute;
  right: 95%;
  left: 0;
  top: 0;
  transition: 0.4s;
  ${Container}:hover &{
    opacity: 1;
  }
`;

const BorderHoverRightBottomMain = styled.div`
  opacity: 0;
  border-bottom: 10px solid white;
  position: absolute;
  bottom: 0;
  right: 95%;
  left: 0;
  transition: 0.4s;
  ${Container}:hover &{
    opacity: 1;
  }
`;

export default ProjectCard;
