import * as React from 'react'
import { MainNavbar, Footer } from '~src/components'
import { ContactFormSection } from '~src/features/home/components'


export const Contact = () => {
  return (
    <>
        <MainNavbar contact />
        <section id="contact-form-section" className="pt-10 pb-8">
            <ContactFormSection />
        </section>
        <Footer />
    </>
  )
}