import React from "react"
import Image from "gatsby-image"
import useInstagram from "../../hooks/use-instagram"

const Instagram = () => {
  const instaPhotos = useInstagram()
  return (
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
  )
}

export default Instagram
