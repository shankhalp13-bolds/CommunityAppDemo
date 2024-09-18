import Footer from '@/Components/STBA/Footer'
import Navbar from '@/Components/STBA/Navbar'

export default function Layout({ children }) {

    return (
        <main className='relative'>
            <header >
                <Navbar />
            </header>
            <article >{children}</article>
            <footer >
                <Footer />
            </footer>
        </main>
    )
}