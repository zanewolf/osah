import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Moment from 'react-moment'

export default function BlogCard(blog) {
    const { title,body,tags,slug,bannerImage,short } = blog.content.fields

    return (
        <div className={`card w-[350px] h-[500px] rounded-2xl drop-shadow-xl `}>

            {/*<Link href={'/projects/' + slug}>*/}
            {/*    <a>*/}
                    <div className={`featured w-[100%] h-[40%] relative`}>
                        <Image
                            src={'https:' + bannerImage.fields.file.url}
                            layout={'fill'}
                            alt={'project-image-'+slug}
                            blurDataURL={`https://${bannerImage.fields.file.url}?q=${80}`}
                            placeholder="blur"
                            objectFit={'cover'}
                            // sizes={'100%'}
                            // width={'100%'}
                            // height={'100%'}
                        />
                    {/*</div>*/}
                    <div className={`relative flex text-white h-full w-full m-auto p-2 text-center items-center text-5xl font-extrabold bg-black bg-opacity-60`}>
                        <span className={'text-center m-auto'}>{title}</span>
                    </div>
                    <div className="card-content relative h-[100%] m-auto pb-2 flex flex-col flex-nowrap gap-2">
                        <div className="info p-2 text-gray-500">
                            <Moment date={blog.content.sys.createdAt} format={"LL"}/>
                            {/*<div className={'text-lg lg:text-2xl font-bold uppercase border-b-2 border-black w-auto'}>{ title }</div>*/}
                            {/*<h2>{project.fields.tools}</h2>*/}
                            {/*<div className={'pt-1 absolute bottom-1 gap-y-1 flex flex-row flex-wrap flex-grow-1'}>*/}
                            {/*    /!*{tags?.map((tool,i)=> <p key={i} className={`rounded-full text-md bg-gray-700 text-black pl-2 pr-2 mr-2`}>{tool}</p>)}*!/*/}
                            {/*</div>*/}
                        </div>
                        <div className={'px-2 h-[50%]'}>
                            <div className={'text-ellipsis h-auto text-black'}>{short}</div>
                        </div>

                            {/*<p>Takes approx 20min  mins to make</p>*/}
                        <Link href={'/blog/' + slug}><a className={'text-white font-bold bg-sky-900 w-1/3 m-auto items-center text-center rounded-2xl p-2'}>Read More</a></Link>
                        {/*</div>*/}
                    </div>
                    </div>

            {/*    </a>*/}
            {/*</Link>*/}

            <style jsx>{`
              .card {
                //transform: rotateZ(-1deg);
                //position: relative;
                color: #000;
                //-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

              }

              .card-content {
                background: #fff;

              }

              .info h4 {
                margin: 4px 0;
                text-transform: uppercase;
              }
            `}</style>

        </div>
    )
}
