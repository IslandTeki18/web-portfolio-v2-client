import * as React from 'react'
import { MainNavbar, Footer } from '~src/components'
import { ContactFormSection } from '~src/features/home/components'


export const Contact = () => {
  return (
    <>
        <MainNavbar />
        <section id="contact-form-section" className="py-8">
            <ContactFormSection />
        </section>
        <Footer />
    </>
  )
}