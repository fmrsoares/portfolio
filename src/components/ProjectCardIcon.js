import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ProjectCardIcon = ({ framework }) => (
  <Logo>
    <LogoImg
      fluid={framework.logo.childImageSharp.fluid}
      alt={framework.name}
    />
  </Logo>
);

ProjectCardIcon.propTypes = {
  framework: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const Logo = styled.div`
  width: 7.5%;
  margin-right: 1.5rem;
`;

const LogoImg = styled(Img)`
`;

export default ProjectCardIcon;
