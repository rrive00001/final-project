import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const DashboardMain: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        DASHBOARD
      </h1>

        <div>
            <div className="form-control w-full max-w-xs">
                <br/>
                <div className="avatar">
                    </div>
                    <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
            </div>
      </div>
      <br/>

      <button className="btn btn-primary w-64 rounded-full">LOG OUT</button>
      <br/>
      
    </>
  )
}

export default DashboardMain
