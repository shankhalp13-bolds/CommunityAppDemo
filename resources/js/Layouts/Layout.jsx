import Footer from '@/Components/STBA/Footer'
import Navbar from '@/Components/STBA/Navbar'

export default function Layout({ children , isEventsEnabled }) {

    return (
        <main className='relative'>
            <header >
                <Navbar  isEventsEnabled={isEventsEnabled} />
            </header>
            <article >{children}</article>
            <footer >
                <Footer />
            </footer>
        </main>
    )
}
