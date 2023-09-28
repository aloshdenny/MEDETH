const { expect } = require('chai');
const { ethers } = require('hardhat');

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Med_ETH", async function(){
    let deployer, addr1, addr2, pdf, database
    let URI = ""

    beforeEach(async function(){
        const PDF = await ethers.getContractFactory("PDF")
        const Database = await ethers.getContractFactory("Database")

        pdf = await PDF.deploy()
        database = await Database.deploy();

        [deployer, addr1, addr2] = await ethers.getSigners()
    })

    describe("Deployment", function() {
        it("Should track name and symbol of the PDF Collection", async function(){
            expect(await pdf.name())
                .to
                .equal("Med_ETH")
            expect(await pdf.symbol())
                .to
                .equal("meth")
        })
    })

    describe("Minting PDF's", async function(){
        it("Should track each minted PDF", async function(){
            await pdf.connect(addr1).mint(URI)
            expect(await pdf.tokenCount())
                .to
                .equal(1)
            
            expect(await pdf.balanceOf(addr1.address))
                .to
                .equal(1)

            expect(await pdf.tokenURI(1))
                .to
                .equal(URI)
        })
    })

    describe("Uploading Records and Prescriptions", function(){
        beforeEach(async function(){
            await pdf.connect(addr1).mint(URI)
            await pdf.connect(addr1).setApprovalForAll(database.address, true)

            it("Should track the uploaded records and prescription", async function(){
                await expect(database.connect(addr1).uploadRecord(pdf.address, addr2, 1, true))
                    .to
                    .emit(database, "recordUploads")
                    .withArgs(
                        1,
                        pdf.address,
                        1,
                        addr2.address,
                        addr1.address
                    )
            })
            it("Should track the uploaded records and prescription", async function(){
                await expect(database.connect(addr1).uploadPresc(pdf.address, addr2, 1, false))
                    .to
                    .emit(database, "prescUploads")
                    .withArgs(
                        1,
                        pdf.address,
                        1,
                        addr2.address,
                        addr1.address
                    )
            })
        })
    })

})