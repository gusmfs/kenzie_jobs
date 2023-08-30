import { Footer } from "../Footer"

export const DefaultTemplate = ({children}) => {
  return(
    <>
    <main>{children}</main>
    <Footer />
    </>
  )
}