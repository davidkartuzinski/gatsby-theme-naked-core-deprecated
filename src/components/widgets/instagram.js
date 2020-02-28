import React from "react"
import Image from "gatsby-image"
import useInstagram from "../../hooks/use-instagram"

const Instagram = () => {
  const instaPhotos = useInstagram()
  return (
    <section>
      <ul>
        {instaPhotos.map((photo, index) => {
          return (
            <li key={index}>
              <a href={photo.link}>
                <Image fixed={photo.fixed} alt={photo.caption.text} />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Instagram
