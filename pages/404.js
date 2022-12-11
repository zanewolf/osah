import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Hero from "../components/Hero";

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, )

  return (
    <Hero>
        <div className="not-found">
          <h1>Ooops...</h1>
          <h2>That page cannot be found :(</h2>
          <p>Going back to the <Link href="/"
                                     legacyBehavior={true}><a>Homepage</a></Link> is 3 seconds...</p>
        </div>
    </Hero>
  );
}
 
export default NotFound;