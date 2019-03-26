import React, { Fragment, useState, useEffect } from 'react'
import styled from '@emotion/styled'

// UI Elements
import { Credits } from 'components/atoms'

// Services
import { getRandomImage } from 'services'

const CoverImage = styled.div(({ urls }) => ({
  background: `url('${urls.full}')`,
  height: '80vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

export default function Hero({ darkMode }) {
  const [image, setImage] = useState('')

  useEffect(() => {
    getRandomImage(setImage)
  }, [])

  if (image) {
    const photoUrl = `//${image.user.links.html.replace('https://', '')}`

    return (
      <Fragment>
        <CoverImage urls={image.urls} />
        <Credits
          darkMode={darkMode}
          description={image.alt_description}
          author={image.user.username}
          url={photoUrl}
        />
      </Fragment>
    )
  }

  return null
}
