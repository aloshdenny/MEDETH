import React, {useContext, useEffect} from 'react'
import './Home.css'
import { DataContext } from '../../DataContext'
import { Link } from 'react-router-dom'
import './fontawesome-all.min.css'

const Home = () => {
    const { web3Handler, account } = useContext(DataContext)
    console.log(account)
    
    
  return (
    <>
    <div id="page-wrapper">

           
                <header id="header" className="alt">
                    <h1 id="logo"><a href="index.html">Med_ETH</a></h1>
                    <nav id="nav">
                        <ul>
                            <li className="current"><a>HOME</a></li>
                            <li className="submenu">
                                {account ? <Link to='/profile'><button href="/profile">{account}</button></Link> : <Link onClick={web3Handler}>Login</Link>}
                                <ul>
                                    <li><a href="left-sidebar.html">User</a></li>
                                    <li><a href="right-sidebar.html">Medical Professional</a></li>
                                
                                    
                                </ul>
                            </li>
                            <li>About</li>
                            <li><a href=""></a>How it works?</li>
                        </ul>
                    </nav>
                </header>


                <section id="banner">

                    
                    <div className="inner">

                        <header>
                            <h2>Med_ETH</h2>
                        </header>
                        <p> <strong>Own your health data.</strong>It's rightfully yours.
                        </p>
                        <footer>
                            <ul className="buttons stacked">
                                <li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
                            </ul>
                        </footer>

                    </div>

                </section>

                <article id="main">

                    <header className="special container">
                        {/* <span className="icon solid fa-chart-bar"></span> */}
                        <h2>
                        <br /><strong>Med_ETH</strong> is a patient-centered health data ecosystem that
                        can protect individual privacy and maximize the reliability of health data.
                    </h2>
                        
                    </header>

             
                        <section className="wrapper style2 container special-alt">
                            <div className="row gtr-50">
                                <div className="col-8 col-12-narrower">

                                    <header>
                                        <h2>How we operate?</h2>
                                    </header>
                                    <p>Med_ETH is a decentralized Ethereum-based medical record network that utilizes IPFS technology to securely store patient data widely over the planet's medical industry.</p>
                                    <p>Patient records are hosted on validated clinical servers that use Med_ETH, rather than on a localized server.</p>
                                        <p>Med_ETH is Ethereum-based, meaning the patient can sign-in to any clinic on the planet using their digital wallet creds.</p>
                                        <p>Data is always secure. Proof-of-Authority ensures that only verified medical professionals can modify patient data.</p>
                                    
                                    

                                </div>
                                <div className="col-4 col-12-narrower imp-narrower">

                                    <ul className="featured-icons">
                                        {/* <li><span className="icon fa-clock"><span className="label">Feature 1</span></span></li>
                                        <li><span className="icon solid fa-volume-up"><span className="label">Feature 2</span></span></li>
                                        <li><span className="icon solid fa-laptop"><span className="label">Feature 3</span></span></li>
                                        <li><span className="icon solid fa-inbox"><span className="label">Feature 4</span></span></li>
                                        <li><span className="icon solid fa-lock"><span className="label">Feature 5</span></span></li>
                                        <li><span className="icon solid fa-cog"><span className="label">Feature 6</span></span></li> */}
                                    </ul>

                                </div>
                            </div>
                        </section>

           
                        <section className="wrapper style1 container special">
                            <div className="row">
                                <div className="col-4 col-12-narrower">

                                    <section>
                                        {/* <span className="icon solid featured fa-check"></span> */}
                                        <header>
                                            <h3>Simple</h3>
                                        </header>
                                        <p>Med_ETH makes booking appointments so much simpler. No more standing in queues.</p>
                                    </section>

                                </div>
                                <div className="col-4 col-12-narrower">

                                    <section>
                                        {/* <span className="icon solid featured fa-check"></span> */}
                                        <header>
                                            <h3>Reliable</h3>
                                        </header>
                                        <p>Operating on the blockchain means the software is never down.</p>
                                    </section>

                                </div>
                                <div className="col-4 col-12-narrower">

                                    <section>
                                        {/* <span className="icon solid featured fa-check"></span> */}
                                        <header>
                                            <h3>Secure</h3>
                                        </header>
                                        <p>Ethereum offers the best security and transparency. And we run on Ethereum. Connect the dots..</p>
                                    </section>

                                </div>
                            </div>
                        </section>

                
                        <section className="wrapper style3 container special">

                            <header className="major">
                                <h2>How we outrival <strong>conventional methods?</strong></h2>
                            </header>

                            <div className="row">
                                <div className=" col-12-narrower">

                                    <section>
                                        
                                        <p>Waiting in queues and booking appointments? <strong>No more.</strong> Carrying around medical documents, heavy X-ray diagnoses and prescriptions?  <strong>No more.</strong> Your digital wallet holds all your credential and medical data on your phone, so you and only you can hold access to it. You choose with whom and where to book appointments. And the best part is, your data is available to <strong>everyone</strong> and <strong>no one</strong> at the same time.</p>
                                    </section>

                                </div>
                                
                            </div>
                            

                            <footer className="major">
                                <ul className="buttons">
                                    <li><a href="#" className="button">See More</a></li>
                                </ul>
                            </footer>

                        </section>

                </article>

       
                <section id="cta">

                    <header>
                        <h2>About Us....</h2>
                        <p></p>
                    </header>
                    <footer>
                        <ul className="buttons">
                            <li><a href="#" className="button primary"></a></li>
                            <li><a href="#" className="button"></a></li>
                        </ul>
                    </footer>

                </section>

           
                <footer id="footer">

                    <ul className="icons">
                        <li><a href="#" className="icon brands circle fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands circle fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands circle fa-google-plus-g"><span className="label">Google+</span></a></li>
                        <li><a href="#" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands circle fa-dribbble"><span className="label">Dribbble</span></a></li>
                    </ul>

                    <ul className="copyright">
                        <li>&copy; </li><li>: <a href="http://html5up.net"></a></li>
                    </ul>

                </footer>

        </div>

       
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.dropotron.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/jquery.scrollex.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
            </>
  )
}

export default Home