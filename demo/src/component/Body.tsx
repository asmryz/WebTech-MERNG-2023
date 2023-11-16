import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

type BodyProps = {
    num: number,
    msg: string,
    arr: number[]
}

function Body({ num, msg, arr }: BodyProps) {
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div>{msg}</div>
            <div>{num}</div>
            <div>{JSON.stringify(arr)}</div>
        </div>
    )
}

export default Body