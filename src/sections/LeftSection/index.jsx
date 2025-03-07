import Contact from "../Contact"
import Navbar from "../Navbar"
import Header from "../Header"
const leftSection = () => {
    return (
    <div className="px-4">
        <div className='sticky top-0 grid gap-y-4 lg:grid-rows-[35%_40%_25%] lg:h-[87vh]'>
            <Header />
            <Navbar />
            <Contact />
        </div>
    </div>
    )
}

export default leftSection