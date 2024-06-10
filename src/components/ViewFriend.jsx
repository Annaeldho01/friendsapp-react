import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewFriend = () => {
    const [data,changeData]=useState(
        [
            ]
    )
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                console.log(data)
                changeData(response.data)
            }
                
        ).catch().finally()
    }
    useEffect(()=>fetchData,[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">NAME</th>
      <th scope="col">FRIENDS NAME</th>
      <th scope="col">FRIENDS NICK NAME</th>
      <th scope="col">DESCRIBE UR FRIEND</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
return <tr>
<th scope="row">{index+1}</th>
<td>{value.name}</td>
<td>{value.friendName}</td>
<td>{value.friendNickName}</td>
<td>{value.DescribeYourFriend}</td>
</tr>
        }
    )}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriend