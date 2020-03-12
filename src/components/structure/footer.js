import React from "react"
import SocialFollowMe from "../widgets/social-follow-me"
import TextWidget2 from "../widgets/text-widget-2"
import IconLogo from "../core/icon-logo"

const Footer = () => {
  return (
    <footer>
      <section className="footer-widgets ">
        <div>
          <IconLogo />
        </div>
        <div>
          <h2 className="h3">Follow Gatsby Theme Naked</h2>
          <SocialFollowMe />
        </div>
        <div>
          <TextWidget2 />
        </div>
      </section>
      <section className="privacy">
        <small>
          &copy;2020 | The Gatsby Theme Naked Logo and name. The theme and
          content of this demo are MIT licensed.
        </small>
      </section>
    </footer>
  )
}

export default Footer
