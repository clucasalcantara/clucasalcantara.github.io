import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId:
    '5059820b95e1a8d09bcedd1f81e56039ff2d85d11dfa5ea2d4a7dcf262595a49',
  secret: '200648d2a599ab7130da5065e65fb337c9d40893b6c76e1708234f4c009a80d0'
})

const CoverImage = styled.div(({ urls }) => ({
  background: `url('${urls.full}')`,
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const getUnsplashImage = async cb => {
  const image = await unsplash.photos
    .getRandomPhoto({ query: 'drone' })
    .then(response => response.json())
    .then(data => data)

  if (image.urls) {
    return cb(image)
  }

  return null
}

export default function Hero() {
  const [image, setImage] = useState('')

  useEffect(() => {
    getUnsplashImage(setImage)
  }, [])

  return image ? <CoverImage urls={image.urls} /> : null
}
