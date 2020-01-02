import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ContactBar from '../components/ContactBar';
import TopLogo from '../components/TopLogo';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #22262a;
    margin: 0px;
    margin-right: 1rem;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
    }
    &::-webkit-scrollbar-track {
      background-color: #22262a;
    }
  }
`;

const App = ({ data }) => {
  const { projects, contacts, portfolioLogo } = data.markdownRemark.frontmatter;
  console.log(data.markdownRemark.frontmatter);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProjectModal, setProjectModal] = useState(projects[0]);
  return (
    <div>
      <Helmet />
      <GlobalStyle />
      <TopLogo portfolioLogo={portfolioLogo} />
      <ContactBar contacts={contacts} />
      <Projects>
        <Header>
          Projects
        </Header>
        <ProjectsLayout>
          {projects.map((project) => (
            <ProjectCard
              id={project.name}
              project={project}
              openProjectModal={(selectedProject) => {
                setModalIsOpen(true);
                setProjectModal(selectedProject);
              }}
            />
          ))}
          <ProjectModal
            modalIsOpen={modalIsOpen}
            closeModal={() => {
              setModalIsOpen(false);
            }}
            project={selectedProjectModal}
          />
        </ProjectsLayout>
      </Projects>

    </div>
  );
};

export const getProjectsQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        contacts {
          githubLink
          linkedInLink
          email
          cvLink
        }
        portfolioLogo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          } 
        }
        projects {
          frameworks {
            name
            logo {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              } 
            }
          }
          name
          tags
          demoLink
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            } 
          }
          description
        }
      }
    }
  }`;

App.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        portfolioLogo: PropTypes.oneOfType([PropTypes.object]).isRequired,
        contacts: PropTypes.oneOfType([PropTypes.object]).isRequired,
        projects: PropTypes.oneOfType([PropTypes.array]).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const Projects = styled.div`
  margin-left: 5rem;
`;

const ProjectsLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`;

const Header = styled.div`
  font-family: Staatliches;
  color: #E2E6EC;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 1rem;
  text-align: center;
`;
export default App;
