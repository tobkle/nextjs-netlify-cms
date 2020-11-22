import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

interface Props {
    content: { attributes: HomeAttributes }
}
interface HomeAttributes {
    hero_title: string
    hero_description: string
    hero_image: string
}
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
