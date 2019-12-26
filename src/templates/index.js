import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const App = ({ data }) => {
  const { projects } = data.markdownRemark.frontmatter;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProjectModal, setProjectModal] = useState(projects[0]);
  return (
    <div>
      <Helmet bodyAttributes={{ style: 'background-color : #22262a' }} />
      <Header>
          Projects
      </Header>
      <ProjectsLayout>
        {projects.map((project) => (
          <ProjectCard
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
    </div>
  );
};

export const getProjectsQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
        projects: PropTypes.arrayOf({
          name: PropTypes.string.isRequired,
          logo: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.oneOfType([PropTypes.object]).isRequired,
            }).isRequired,
          }).isRequired,
          description: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          frameworks: PropTypes.arrayOf({
            name: PropTypes.string.isRequired,
            logo: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.oneOfType([PropTypes.object]).isRequired,
              }).isRequired,
            }).isRequired,
          }),
        }),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const ProjectsLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Header = styled.div`
  font-family: Staatliches;
  color: #E2E6EC;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 1rem;
`;
export default App;
