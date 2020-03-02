import React from "react"
import Image from "gatsby-image"
import useInstagram from "../../hooks/use-instagram"

const Instagram = () => {
  const instaPhotos = useInstagram()
  return (
    <section className="instagram-widget">
      <h3>The Gatsby.js Naked Theme on Instagram</h3>
      <ul>
        {instaPhotos.map((photo, index) => {
          return (
            <li key={index}>
              <a href={photo.link}>
                <Image fluid={photo.fluid} alt={photo.caption.text} />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Instagram
