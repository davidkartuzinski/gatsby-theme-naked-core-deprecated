import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// https://github.com/100Shapes/gatsby-plugin-cookiehub/issues/3#issuecomment-570931890

const CookieBannerCookieHub = ({ googleTrackingId, cookieHubId }) => {
  const googleUrl =
    "https://www.googletagmanager.com/gtag/js?id=" + googleTrackingId
  const cookieHubUrl = "https://cookiehub.net/cc/" + cookieHubId + ".js"
  return (
    <Helmet
      script={[
        {
          type: "text/javascript",
          src: googleUrl,
        },
        {
          type: "text/javascript",
          innerHTML:
            `var gtagId = '` +
            googleTrackingId +
            `';
                        window['ga-disable-' + gtagId] = true;
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());`,
        },
        {
          type: "text/javascript",
          src: cookieHubUrl,
        },
        {
          type: "text/javascript",
          innerHTML:
            `window.addEventListener("load", function() {
                            window.cookieconsent.initialise({
                            onInitialise: function(status) {
                                if (this.hasConsented('required')) {
                                }
                                if (this.hasConsented('analytics')) {
                                    window['ga-disable-` +
            googleTrackingId +
            `'] = false;
                                    gtag('config', gtagId);
                                }
                                if (this.hasConsented('marketing')) {
                                }
                            },
                            onAllow: function(category) {
                                if (category == 'required') {
                                }
                                if (category == 'analytics') {
                                    window['ga-disable-` +
            googleTrackingId +
            `'] = false;
                                    gtag('config', gtagId);
                                }
                                if (category == 'marketing') {
                                }
                            },
                            onRevoke: function(category) {
                                if (category == 'required') {
                                }
                                if (category == 'analytics') {
                                    window['ga-disable-` +
            googleTrackingId +
            `'] = true;
                                }
                                if (category == 'marketing') {
                                }
                            }
                        })
                    });`,
        },
      ]}
    />
  )
}

CookieBannerCookieHub.propTypes = {
  googleTrackingId: PropTypes.string.isRequired,
  cookieHubId: PropTypes.string.isRequired,
}

export default CookieBannerCookieHub
