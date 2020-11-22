import { NextPage, GetStaticProps } from 'next'
import Image, { ImageProps } from 'next/image'

interface Props {
    content: { attributes: HomeAttributes }
}
interface HomeAttributes {
    hero_title: string
    hero_description: string
    hero_image: string
}

/// <reference types="react" />
declare const VALID_LOADING_VALUES: readonly ['lazy', 'eager', undefined]
declare type LoadingValue = typeof VALID_LOADING_VALUES[number]
declare const VALID_LAYOUT_VALUES: readonly [
    'fill',
    'fixed',
    'intrinsic',
    'responsive',
    undefined
]
declare type LayoutValue = typeof VALID_LAYOUT_VALUES[number]
declare type ImgElementStyle = NonNullable<
    JSX.IntrinsicElements['img']['style']
>
export declare type ImageProps = Omit<
    JSX.IntrinsicElements['img'],
    'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading' | 'style'
> & {
    src: string
    quality?: number | string
    priority?: boolean
    loading?: LoadingValue
    unoptimized?: boolean
    objectFit?: ImgElementStyle['objectFit']
    objectPosition?: ImgElementStyle['objectPosition']
} & (
        | {
              width?: never
              height?: never
              /** @deprecated Use `layout="fill"` instead */
              unsized: true
          }
        | {
              width?: never
              height?: never
              layout: 'fill'
          }
        | {
              width: number | string
              height: number | string
              layout?: Exclude<LayoutValue, 'fill'>
          }
    )
export default function Image({
    src,
    sizes,
    unoptimized,
    priority,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    ...all
}: ImageProps): JSX.Element
export {}

const HomePage: NextPage<Props> = ({ content }) => {
    const { attributes } = content
    return (
        <>
            <h1>{attributes.hero_title}</h1>
            <p>{attributes.hero_description}</p>
            <p>{attributes.hero_image}</p>
            <p style={{ position: 'relative', height: '500px' }}>
                <Image
                    layout='fill'
                    objectFit='cover'
                    src={`/${attributes.hero_image}`}
                    alt={'hero image'}
                />
            </p>
            {/* <img src={attributes.hero_image} alt='hero image' /> */}
        </>
    )
}
export const getStaticProps: GetStaticProps = async () => {
    const content = await import(`../content/pages/${'home'}.md`)
    return { props: { content: content.default } }
}
export default HomePage
