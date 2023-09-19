import React from 'react'

const kategori = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex gap-3 m-[150px] flex-col">
          <div className="w-[350px] bg-[#E6F1FF] rounded-md">
            <div className="w-[150px] h-[150px] rounded-md  bg-[#6CADFF]">
            </div>
          </div>
          <div className="w-[350px] bg-[#E6F1FF] rounded-md">
            <div className="w-[150px] h-[150px] rounded-md  bg-[#6CADFF]">
            </div>
          </div>
          <div className="w-[350px] bg-[#E6F1FF] rounded-md">
            <div className="w-[150px] h-[150px] rounded-md  bg-[#6CADFF]">
            </div>
          </div>
          <div className="w-[350px] bg-[#E6F1FF] rounded-md">
            <div className="w-[150px] h-[150px] rounded-md  bg-[#6CADFF]">
            </div>
          </div>
        </div>
        <div className="bg-[#E6F1FF] w-[350px] h-[450px] mt-[200px] flex-col">
          <div className="bg-slate-500 w-[150px] p-[5px] ml-[18px] rounded-md" style={{ marginTop: '20px' }}>
            <p className='text-center text-[#D9D9D9]'>Detail pesanan</p>
          </div>
          <hr className='w-[90%] border-2 my-[25px] mx-auto mt-[20px]'/>
          <div className="bg-slate-500 w-[300px] p-[5px] ml-[18px] h-[150px] rounded-md" style={{ marginTop: '20px' }}>
            <p className='text-left text-[#D9D9D9]'>Opsi pengiriman</p>
          </div>
          <div className="bg-slate-500 w-[300px] p-[5px] ml-[18px] rounded-md" style={{ marginTop: '20px' }}>
            <p className='text-left text-[#D9D9D9]'>Pesan:</p>
          </div>
          <hr className='w-[90%] border-2 my-[25px] mx-auto mt-[20px]'/>
          <p className='text-left text-[#949494]'>Total pesanan :</p>
          <div className="bg-slate-500 w-[200px] p-[5px] ml-[75px] rounded-md" style={{ marginTop: '20px' }}>
            <p className='text-center text-[#D9D9D9]'>Buat Pesanan</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default kategori