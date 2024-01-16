import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/prince0710")
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-white text-black p-4 text-3xl'>
      Github repo: {data.public_repos},
      <br />
      Bio: {data.bio}
      <img className='mx-auto' src="https://avatars.githubusercontent.com/u/92538407?v=4" alt="{Github picture}" width={300} />
    </div>
  )
}

export default Github
