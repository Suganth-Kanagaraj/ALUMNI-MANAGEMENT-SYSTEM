import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import { useSelector } from 'react-redux';
export default function FooterCom() {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <Footer container className={theme === "dark" ? "footer-dark" : "footer-light"}>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className={`self-center whitespace-nowrap text-sm sm:text-xl font-semibold ${theme === 'light' ? 'text-darkSlate' : 'text-paleGray'}`}>
                            <span className={`px-2 py-1 rounded-lg ${theme === 'light' ? 'bg-rosewoodRed text-white' : 'bg-burntOrange text-black'}`}>HI</span>
                            Alumni
                        </Link>
                        
                    </div>
                    {/* <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='Contact Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >  
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                        </div>
                    </div> */}
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center items-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />

                    </div>
                </div>
                {/*<Footer.Divider />
                 <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="ConnectAlumni"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />

                    </div>
                </div> */}
            </div>
        </Footer>
    );
}
