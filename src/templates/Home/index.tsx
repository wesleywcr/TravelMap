import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Map Travel"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://travel-map.wesleywcr.com.br"
        openGraph={{
          url: 'https://travel-map.wesleywcr.com.br',
          title: 'Travel Map',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://travel-map.wesleywcr.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Travel Map'
            }
          ],
          site_name: 'Travel Map'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
