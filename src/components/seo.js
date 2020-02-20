import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, pathname, article, meta, lang }) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    author
                    imageShare 
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const seo = {
        title: title || site.siteMetadata.defaultTitle,
        description: description || site.siteMetadata.defaultDescription,
        image: `${site.siteMetadata.siteUrl}/${image || site.siteMetadata.imageShare}`,
        // url: `${siteUrl}${pathname || '/'}`,
        type: article ? 'article' : 'website',
    };

    return (
        <Helmet
            defer={false}
            htmlAttributes={{ lang }}
            title={seo.title}
            meta={[
                {
                    name: 'description',
                    content: seo.description,
                },
                {
                    name: 'image',
                    content: seo.image,
                },
                // {
                //     property: 'og:url',
                //     content: seo.url,
                // },
                {
                    property: 'og:title',
                    content: seo.title,
                },
                {
                    property: 'og:description',
                    content: seo.description,
                },
                {
                    property: 'og:image',
                    content: seo.image,
                },
                {
                    property: 'og:type',
                    content: seo.type,
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    name: 'twitter:creator',
                    content: `@${site.siteMetadata.social.twitter}`,
                },
                {
                    name: 'twitter.title',
                    content: seo.title,
                },
                {
                    name: 'twitter.description',
                    content: seo.description,
                },
                {
                    property: 'twitter:image',
                    content: seo.image,
                }
            ].concat(meta)} 
        />
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
    meta: PropTypes.array,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
    lang: 'en',
    meta: [],
};

export default SEO;