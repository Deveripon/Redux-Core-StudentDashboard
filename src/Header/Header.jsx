import logo from ".././assets/img/3523407.png";
export default function Header() {
    return (
        <section className='h-[130px]  flex items-center w-full'>
            <nav className='section-container'>
                <div className='flex items-center'>
                    <img
                        className='h-[70px]'
                        src={logo}
                        alt='logo'
                    />
                    <h1 className='text-xl font-bold text-gray-400'>
                        <span className='text-cyan-600'>Learn</span> With Us
                    </h1>
                </div>
            </nav>
        </section>
    );
}

