import React from 'react'

const Logo = (props) => {

    const size = props?.size || 40
    const color = props?.color || '#61DAFB'

    return (
        <>
            <div>
                <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill={color}>
                        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z" />
                    </g>
                </svg>
            </div>
            <style jsx>{`
                div {
                    position: relative;
                    width: ${size}px;
                    height: ${size}px;
                }
            `}</style>
        </>
    )
}



export default Logo