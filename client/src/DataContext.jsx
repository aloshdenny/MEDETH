import React, {useState} from 'react'
import { ethers } from 'ethers';
import PDFAbi from './contractsData/PDF.json'
import PDFAddress from './contractsData/PDF-address.json'
import DatabaseAbi from './contractsData/Database.json'
import DatabaseAddress from './contractsData/Database-address.json'

export const DataContext = React.createContext()

export const DataContextProvider = ({children}) => {
    const [account, setAccount] = useState(null)
  const [database, setDatabase] = useState({})
  const [pdf, setPDF] = useState({})
  const [loading, setLoading] = useState(true)

  
  const web3Handler = async() => {
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
    setAccount(accounts[0])
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async function(accounts){
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }

  const loadContracts = async(signer) => {
    const pdf = new ethers.Contract(PDFAddress.address, PDFAbi.abi, signer)
    setPDF(pdf)

    const database = new ethers.Contract(DatabaseAddress.address, DatabaseAbi.abi, signer)
    setDatabase(database)
  }
    return(
        <>
            <DataContext.Provider
            value={{
                account,
                pdf,
                database,
                web3Handler
            }}
            >
                {children}
            </DataContext.Provider>
        </>
    )
}