/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link as GatsbyLink } from 'gatsby';
import { jsx } from 'theme-ui';
import styled from '@emotion/styled/macro';
import { Flex, Box, Text, Heading, Button } from 'rebass';

import substrDescription from '../../utils/substrDescription';

const MainPageCollectionBlock = (props) => {
  const {
    title,
    description,
    image,
    fields: { shopifyThemePath },
  } = props.collection;

  const {
    block,
    textColor = 'primary',
    textBgColor = 'white',
    buttonText = 'Shop now',
    buttonTextColor = 'primary',
    buttonBgColor = 'white',
    gatsbyImageProps,
    backgroundPosition,
  } = props;

  return (
    <BackgroundImage
      fluid={
        image && image.localFile ? image.localFile.childImageSharp.fluid : ''
      }
      sx={{
        width: '100%',
        height: '100%',
        backgroundPosition: backgroundPosition || '',
      }}
      {...gatsbyImageProps}
    >
      <Flex
        m="auto"
        p="1"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: '100%',
          height: '100%',
        }}
      >
        <Box m="auto" textAlign="center">
          <GatsbyLink
            to={shopifyThemePath}
            sx={{
              color: textColor,
              textAlign: 'center',
              textDecoration: 'none',
              ':hover,:focus,.active': {
                color: textColor,
                textDecoration: 'none',
              },
            }}
          >
            <Heading
              as="h2"
              fontSize={[30, 36, 42]}
              sx={{ textTransform: 'uppercase' }}
            >
              {block.name ? block.name : title}
            </Heading>
            <Text
              fontSize={[1, 2, 3]}
              mt="3"
              sx={{ display: ['none', 'block'] }}
            >
              {block.description
                ? block.description
                : substrDescription(description, 80)}
            </Text>
            <Button
              variant="shopNow"
              sx={{
                bg: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              {buttonText}
            </Button>
          </GatsbyLink>
        </Box>
      </Flex>
    </BackgroundImage>
  );
};

export default MainPageCollectionBlock;
