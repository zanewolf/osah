import { createClient } from 'contentful'
import Image from 'next/image'
// import Skeleton from "../../components/Skeleton";
// import {Parallax} from "react-scroll-parallax";
import BlogBody from "../../components/BlogBody";
import Link from 'next/link'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "blogPost"
    })

    console.log(res)

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    if (!items.length){
        return {
            redirect: {
                destination: '/blog',
                permanent: false
            }
        }
    }

    return {
        props: { project: items[0] },
        revalidate: 10
    }

}



export default function BlogPost({ project }) {

    // if (!project) return <Skeleton/>



    console.log(project.fields)
    const { bannerImage, title,tags,body } = project.fields
    // console.log(categories)
    const accentColor = '#b207b7'
    // console.log(link)

    return (
        <div className={'w-[100vw] flex flex-col flex-nowrap m-auto '}>
            {/*<Parallax speed={10} className={'banner relative block w-full flex flex-col flex-nowrap justify-center mt-12 lg:m-auto'}>*/}
                <div className="bannerImage m-auto flex w-full h-[50vh] relative">
                    <Image
                        src={'https:' + bannerImage.fields.file.url}
                        alt={'featured-image-project-'+title}
                        layout={'fill'}
                        blurDataURL={`https://${bannerImage.fields.file.url}?q=${10}`}
                        placeholder="blur"
                        quality={100}
                        objectFit={'cover'}
                        objectPosition={'top'}
                        // width={featuredImage.fields.file.details.image.width}
                        // height={featuredImage.fields.file.details.image.height}
                    />
                    <div className={'absolute h-full w-full bg-gradient-to-t from-black/90'}></div>
                    <div className={'absolute text-6xl md:text-8xl mt-4 md:mt-0 md:pb-3 w-full h-full flex justify-center text-center place-items-end m-auto'}>{title}</div>
                </div>
            {/*</Parallax>*/}

            <div className="text-black method w-[90vw] md:w-[85vw] lg:w-[75vw] xl:w-[50vw] h-auto flex justify-center m-auto z-2 mb-16 flex flex-col flex-nowrap justify-center items-center m-auto">
                <BlogBody content={body} accentColor={accentColor}/>
            </div>

            <style jsx>{`
              .bannerImage{
                //background-image:linear-gradient(0deg, #00000088 30%, #ffffff44 100%);
              }
            .headerInfo {
                -webkit-clip-path: polygon(5% 5%, 95% 5%, 99% 50%, 95% 95%, 5% 95%, 1% 50%);
                clip-path: polygon(5% 5%, 95% 5%, 99% 50%, 95% 95%, 5% 95%, 1% 50%);
            }
            
      `}</style>
        </div>
    )
}