import React, { useState, useEffect } from 'react';
import CoursesBox from './CoursesBox';
import Alarm from './alarm';
import Nav from './Nav';
import Footer from './footer';

import FetchData from './FetchData';
const CreatePage1 = () => {
    const [searchText, setSearchText] = useState("python");
    const [data,setData] = useState([]);
    useEffect(() => {
        let uri = 'https://www.udemy.com/api-2.0/courses/?search='+ searchText + '&fields[course]=@all&page_size=15';
        let h= new Headers();
        h.append("Accept","application/json, text/plain, */*");
        h.append("Authorization","Basic M05kN3ByOTBrWEJhN0VTdkZFYUh2eklkTGg5MkxZSXJEZ2NWUmU2TDpDT2Yxb3Y0azNSZ29lbmI2Q0o5MzRZMzM2ZEJMbnNEQlB3RlNFNHBFUFJJM0pMZkNEd2c5YkVDNGhpdXJwbUJ6dWJOWm56anBiT1FTM3V6dTRDSFJnS3VkbEptV1l4Y21RVnNGSDFXelFjeDFVVEZVQ1VIOUlya0Jwbkp1VmNjUA==");
        h.append("Content-Type", "application/json;charset=utf-8");
        let req = new Request(uri,{
            method:'GET',
            headers:h,
        });
        fetch(req) 
        .then(Response => Response.json())
        .then(_courses => {
            setData(_courses.results);
        });       },
    [searchText]);
    console.log(data + "page0");
    return ( 
        <React.Fragment>
            {/* <FetchData filter = {"python"}/> */}
            <Nav setSearchText ={setSearchText}/>
            <Alarm/> 
            <CoursesBox courses ={data}/>
            <Footer/>
        </React.Fragment>
     );
}
 
export default CreatePage1;