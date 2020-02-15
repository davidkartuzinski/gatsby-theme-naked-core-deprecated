import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"

const Instagram = () => {
  const instaPhotos = useInstagram()
  return (
    <div>
      {instaPhotos.map(photo => {
        return (
          <div>
            <a key={photo.id} href={photo.link}>
              <Image fluid={photo.fluid} alt={photo.caption.text} />
            </a>
          </div>
        )
      })}
      <p>Instagram</p>
    </div>
  )
}

export default Instagram
