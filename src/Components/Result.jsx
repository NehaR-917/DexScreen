import React from 'react'
import { useState } from "react"

const Result = ({ pair }) => {
    return (
        <div class="rec3">
            <div class="json-display">
                <pre>{JSON.stringify(pair, null, 2)}</pre>
            </div>
            <div class="scroll"></div>
        </div>
    )
}
export default Result