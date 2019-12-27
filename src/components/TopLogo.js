import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const TopLogo = ({ portfolioLogo }) => (
  <PortfolioLogo
    fluid={portfolioLogo.childImageSharp.fluid}
  />
);


TopLogo.propTypes = {
  portfolioLogo: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const PortfolioLogo = styled(Img)`
    margin-top: 1rem;
    margin-left: 1rem;
    @media(min-width: 0px) {
        width: 10rem;
      }
    @media(min-width: 500px) {
        width: 15rem;
    }
`;
export default TopLogo;
