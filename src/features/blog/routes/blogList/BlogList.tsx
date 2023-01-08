import * as React from 'react'
import { Footer, MainNavbar } from '~src/components'
import { BlogListSection } from '../../components'


export const BlogList = () => {
  return (
    <>
        <MainNavbar />
        <section id="blog-list-section" className="pt-10 pb-8">
            <BlogListSection />
        </section>
        <Footer />
    </>
  )
}