// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract Database is ReentrancyGuard{
    // it is used to secure smart contracts from external attacks
    // address payable public immutable feeAccount;
    uint public recordCount;
    uint public prescCount;

    struct Record{
        uint recordId;
        IERC721 pdf;
        uint tokenId;
        address payable user;
        address payable doctor;
    }

    struct Presc{
        uint prescId;
        IERC721 pdf;
        uint tokenId;
        address payable user;
        address payable doctor;
    }

    //i put indexed so that we can search the database by the pdf, doctor or user
    event recordUploads(
        uint recordId,
        address indexed pdf,
        uint tokenId,
        address indexed user,
        address indexed doctor
    );

    //i put indexed so that we can search the database by the pdf, doctor or user
    event prescUploads(
        uint prescId,
        address indexed pdf,
        uint tokenId,
        address indexed user,
        address indexed doctor
    );

    mapping(uint => Record) public records;
    mapping(uint => Presc) public prescs;

    // constructor(){ 
    //     feeAccount = payable(msg.sender); 
    // }
    
    function uploadRecord(IERC721 _pdf, address payable _user, uint _tokenId, bool doctor) external nonReentrant{
        
        recordCount++;

        if(doctor){
            _pdf.transferFrom(msg.sender, _user, _tokenId);

            records[recordCount] = Record(
                recordCount,
                _pdf,
                _tokenId,
                payable(_user),
                payable(msg.sender)
            );

            emit recordUploads(
                recordCount,
                address(_pdf),
                _tokenId,
                _user,
                msg.sender
            );
        }else if(!doctor){
            // _pdf.transferFrom(msg.sender, msg.sender, _tokenId);

            // records[recordCount] = Record(
            //     recordCount,
            //     _pdf,
            //     _tokenId,
            //     payable(_user)
            // );

            emit recordUploads(
                recordCount,
                address(_pdf),
                _tokenId,
                _user,
                _user
            );
        }

    }

    function uploadPresc(IERC721 _pdf, address payable _user, uint _tokenId, bool doctor) external nonReentrant{
        
        prescCount++;

        if(doctor){
            _pdf.transferFrom(msg.sender, _user, _tokenId);

            prescs[prescCount] = Presc(
                prescCount,
                _pdf,
                _tokenId,
                payable(_user),
                payable(msg.sender)
            );

            emit prescUploads(
                prescCount,
                address(_pdf),
                _tokenId,
                _user,
                msg.sender
            );
        }else if(!doctor){
            // _pdf.transferFrom(msg.sender, msg.sender, _tokenId);

            // prescs[prescCount] = Presc(
            //     prescCount,
            //     _pdf,
            //     _tokenId,
            //     payable(_user)
            // );

            emit prescUploads(
                prescCount,
                address(_pdf),
                _tokenId,
                _user,
                _user
            );
        }
    }
}