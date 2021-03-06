import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Container, Title, Copy, Halver, Call } from './item.css';
import twitterbird from './twitter.svg';
import www from './globe_icon.svg';

const Item = ({
  villain,
  state,
  twitter,
  image,
  status,
  challenger,
  tw1tter,
  website,
  logo,
  actblue,
}) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Halver>
          <figure>
            <Img
              fluid={image ? image.childImageSharp.fluid : {}}
              alt={villain}
              className="circlized"
            />
            <figcaption>
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <Title>{villain}</Title>
              </a>
              <Copy>{state}&nbsp;{status}</Copy>
            </figcaption>
          </figure>
          <figure>
            <Img
              fluid={logo ? logo.childImageSharp.fluid : {}}
              alt={challenger}
            />
            <Copy>My challenger: {challenger}</Copy>
            <Halver>
              <Copy>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <img
                    src={www}
                    alt="website outlink"
                    style={{ width: '48px', height: '48px' }}
                  />
                </a>
              </Copy>
              <Copy>
                <a href={tw1tter} target="_blank" rel="noopener noreferrer">
                  <img
                    src={twitterbird}
                    alt="twitter outlink"
                    style={{ width: '48px', height: '48px' }}
                  />
                </a>
              </Copy>
            </Halver>
          </figure>
        </Halver>
        <a href={actblue} target="_blank" rel="noopener noreferrer">
          <Call>
            Donate to Destroy me
          </Call>
        </a>
      </Container>
    )}
  </IO>
);

Item.propTypes = {
  villain: PropTypes.string,
  twitter: PropTypes.string,
  state: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.object.isRequired,
  challenger: PropTypes.string,
  tw1tter: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.object.isRequired,
  actblue: PropTypes.string,
};

export default Item;
