import React from 'react'
import { useState } from "react"
import { url } from "../url"
import Result from "./Result.jsx"
import "./HomePage.css"

const HomePage = () => {
    const [token, setToken] = useState("");
    const [pairs, setPairs] = useState([]);
    return (
        <div class="home">
            <div class="rec1">
                <h1 >Dex Screener </h1>
            </div>
            <div class="rec2">
                <label class="label">Address</label>
                <input class="in" onChange={(t) => {
                    setToken(t.target.value)
                }} type="text" />
                <button type="submit" class="submit" onClick={async () => {
                    console.log(token)
                    const response = await fetch(`${url}/${token}`, {
                        method: "GET",
                    })
                    const json = await response.json();
                    let p = json.pairs;
                    p.sort((a, b) => b.priceUsd - a.priceUsd);
                    p = p.slice(0, 10);
                    setPairs(p);
                }
                }>Submit</button>
            </div>
            {
                pairs.map((pair, index) => (
                    <Result pair={pair} />
                ))
            }
        </div>
    )
}
export default HomePage
