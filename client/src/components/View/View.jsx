import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../../DataContext'
import './fontawesome-all.min.css'
import './View.css'
import './noscript.css'

const View = () => {
  const {database, pdf, account} = useContext(DataContext)
  const [loading, setLoading] = useState(true)
  const [myRecords, setMyRecords] = useState([])
  const [myPrescs, setMyPrescs] = useState([])

  const loadMyRecords = async () => {
    const recordCount = await database.recordCount
    let myRecords = []
    for(let index=1; index<=recordCount; index++){
      const i = await database.records(index)
      if(i.user.toLowerCase() == account){
        const uri = await pdf.tokenURI(i.tokenId)
        const response = await fetch(uri)
        const metadata = await response.json()

        let record = {
          recordId: i.recordId,
          pdf: metadata.pdf
        }
        myRecords.push(record)
      }
    }
    setMyRecords(myRecords)
  }
  const loadMyPrescs = async () => {
    const prescCount = await database.prescCount
    let myPrescs = []
    for(let index=1; index<=prescCount; index++){
      const i = await database.prescs(index)
      // if(i.user.toLowerCase() == account){
        const uri = await pdf.tokenURI(i.tokenId)
        const response = await fetch(uri)
        const metadata = await response.json()

        let presc = {
          prescId: i.prescId,
          pdf: metadata.pdf
        }
        myPrescs.push(presc)
      // }
    }
    setMyPrescs(myPrescs)
  }

  useEffect(() => {
    loadMyRecords()
    loadMyPrescs()
    setLoading(false)
    console.log(myRecords)
    console.log(myPrescs)
  }, [])
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
                                <ul>
                                    <li><a href="left-sidebar.html">User</a></li>
                                    <li><a href="right-sidebar.html">Medial proffessional</a></li>
                                    
                                    
                                </ul>
                            </li>
                            <li><a href="#" className="button primary">About</a></li>
                            <li><a href="#" className="button primary">How it works?</a></li>

                        </ul>
                    </nav>
                </header>

                

                    <header className="special container">
                        <span className="icon solid fa-mobile-alt"></span>
                        <h2>Files</h2>
                    </header>

                                
                                    <div>
                                        <table style={{float: 'left'}}>
                                            <thead>
                                          <tr>
                                            <th>Record</th>
                                            

                                          </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>2.</td>
                                                <td>3.</td>
                                                

                                            </tr>
                                            <tr>
                                                <td><a href="">Medical Records for the Operation on 22/11/2022</a></td>
                                                <td><a href="">Medical Records for the Operation on 12/11/2022</a></td>
                                                <td><a href="">Medical Records for the Operation on 10/11/2022</a></td>

                                            </tr>
                                        </tbody>
                                        </table>
                                        <table style={{float: 'left', marginTop: '150px'}}>
                                            <thead>
                                          <tr>
                                            <th>Prescription</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>1.</td>
                                                <td>2.</td>
                                                <td>3.</td>

                                            </tr>
                                            <tr>
                                            <td><a href="">Medical Records for the Operation on 22/11/2022</a></td>
                                                <td><a href="">Medical Records for the Operation on 12/11/2022</a></td>
                                                <td><a href="">Medical Records for the Operation on 10/11/2022</a></td>

                                            </tr>
                                        </tbody>
                                        </table>
                                        
                                      </div>
                                

                        

                    

            
                <footer id="footer">

                    
                    <ul className="copyright">
                        <li>&copy;</li><li><a href="http://html5up.net"></a></li>
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

export default View