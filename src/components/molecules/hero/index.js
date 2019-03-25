import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId:
    'd9b211b688d91574749ec84699eab83d4331721a3738ae16b9112e079a7cbeef',
  secret: 'edfe605a4ea823c08cafdac18f67274e51be53d5902a4ca6b357fae44370a573'
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
