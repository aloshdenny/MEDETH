import React, {useContext, useState} from 'react'
import {create as ipfsHttpClient} from 'ipfs-http-client'
import { DataContext } from '../../DataContext'
import {Buffer} from 'buffer';
import { useNavigate } from 'react-router-dom';
// import ipfsClient from 'ipfs-http-client'

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



const Upload = () => {
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
    window.location.replace(`https://med-eth.infura-ipfs.io/ipfs/${result.path}`)
    
  }
  return (
    <>
      <div>Upload</div>
      <input type="file" onChange={setLink} name="file" id="" />
      <button onClick={createPDF}>Upload</button>
    </>
  )
}

export default Upload