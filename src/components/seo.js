/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        title === "Tribox Design"
          ? `Tribox Design - Defining brands, simplifying the complex`
          : `%s | ${defaultTitle}`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@triboxdesign`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `facebook-domain-verification`,
          content: `3e3vl046chhes24r4nmzdyr9jyurmj`,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Branding Agency",
          "url": "https://triboxdesign.com",
          "name": "Tribox Design",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+639174483092",
            "contactType": "Customer Support"
          }
        }
      `}
      </script>
      <script>
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '177945830944847');
        fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`
        <img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=177945830944847&ev=PageView&noscript=1"
        />
        `}
      </noscript>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
