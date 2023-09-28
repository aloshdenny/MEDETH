import React, {useState, useEffect, useContext} from 'react'
import './fontawesome-all.min.css'
import './Profile.css'
import './noscript.css'
import {create as ipfsHttpClient} from 'ipfs-http-client'
import { DataContext } from '../../DataContext'
import {Buffer} from 'buffer';
import { useNavigate, Link } from 'react-router-dom'

const projectId = '2J3PQbJ31uQWC7oH0jrnnPgLZm7';
const projectSecret = '5ba7f1c64e43d21f6a14015733ed3d39';

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const Profile = () => {
    localStorage.setItem('doctor', true)
  const doctor = localStorage.getItem('doctor')
  const [curPdf, setPDF] = useState()
  const {account, pdf, database} = useContext(DataContext)

  console.log('Connected account is ', account)
  

  const setLink = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]

    if(file != 'undefined'){
      try{
        const result = await client.add(file)
        console.log('Link to the File is ', `https://med-eth.infura-ipfs.io/ipfs/${result.path}`)
        setPDF(`https://med-eth.infura-ipfs.io/ipfs/${result.path}`)
      }catch(error){
        console.log(error.message)
      }
    }
  }

  const createPDF = async() => {
    if(!curPdf) return

    try{
      const result = await client.add(JSON.stringify({curPdf}))
      mintPDF(result)
    }catch(error){
      console.log(error.message)
    }
  }

  const mintPDF = async(result) => {
    const uri = `https://med-eth.infura-ipfs.io/ipfs/${result.path}`
    await (await pdf.mint(uri)).wait()
    const id = pdf.tokenCount
    await (await pdf.setApprovalForAll(database.address, true)).wait()

    await (await database.uploadRecord(pdf.address, '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', id, doctor))
    const navigate = useNavigate()
    navigate('/view')
  }
  return (
    <>
    <div id="page-wrapper">

     
                <header id="header">
                    <h1 id="logo"><a href="index.html">Med_ETH</a></h1>
                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="index.html">Home</a></li>
                            <li className="submenu">
                                <a href="#">Login</a>
                                <a href="left-sidebar.html">User</a>
                                <a href="right-sidebar.html">Medical Professional</a>
                                <a>About</a>
                                <a href="">How it works?</a>
                            </li>
                            
                        </ul>
                    </nav>
                </header>

            
                <article id="main">

                    
                            <input type="text" placeholder='Enter Wallet address' style={{marginBottom: '20px', background: '#fff'}} />
                        <section className="wrapper style4 container">

                            <div className="row gtr-150">

                                <section style={{marginRight: '400px'}} className="col-md-6">
                                    <header>
                                    </header>
                                    <footer>
                                        <ul className="buttons">

                                            <li>
                                                <input type="file" onChange={setLink} name="file" id="" />
                                                <button onClick={createPDF} href="#" className="button small">Upload</button>
                                            </li>
                                        </ul>
                                    </footer>
                                </section>

                                <section className="col-md-6">
                                    <header>
                                    </header>
                                    <footer>
                                        <ul className="buttons">
                                            <li><Link to='/view' className="button small">View</Link></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                        </section>

                    

                </article>

            
                <footer id="footer">

                    <ul className="icons">
                        <li><a href="#" className="icon brands circle fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands circle fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands circle fa-google-plus-g"><span className="label">Google+</span></a></li>
                        <li><a href="#" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands circle fa-dribbble"><span className="label">Dribbble</span></a></li>
                    </ul>

                    <ul className="copyright"> <a href="http://html5up.net"></a>
                    </ul>

                </footer>

        </div>

       
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.dropotron.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/jquery.scrollgress.min.js"></script>
            <script src="assets/js/jquery.scrollex.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
            </>
  )
}


export default Profile