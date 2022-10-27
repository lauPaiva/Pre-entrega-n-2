

export default function Footer() {

    return (

        <footer className="p-4 shadow md:px-6 md:py-2 dark:bg-sky-500 static">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kira store</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Contacto</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Sobre nosotros</a>
                    </li>
                    
                    <li>
                        <a href="#" className="hover:underline">Potíticas</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto dark:border-white lg:my-3" />
            <span className="pb-4 block text-sm text-gray-500 sm:text-center dark:text-white">© 2022 <a href="#" className="hover:underline">Kira store</a>. todos los derechos reservados.
            </span>
        </footer>
    )
}