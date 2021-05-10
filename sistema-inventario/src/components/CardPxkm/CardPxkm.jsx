import React from 'react'

export function CardPxkm({cardData}) {
    const {title, montoSol, montoDolar} = cardData;
    return (
        <span>
            <h4>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.16457 11.8978L10.192 13.5601C10.826 13.9084 11.571 13.3384 11.4442 12.6102L10.8736 9.09577C10.8577 8.96912 10.8894 8.84247 10.9846 8.76332L13.4097 6.27787C13.9169 5.75545 13.6316 4.85309 12.9342 4.74227L9.558 4.23569C9.4312 4.21986 9.3361 4.1407 9.28854 4.02989L7.78274 0.832047C7.46573 0.16715 6.5464 0.16715 6.22939 0.832047L4.72359 4.02989C4.67604 4.1407 4.56509 4.21986 4.45413 4.23569L1.07797 4.74227C0.364695 4.85309 0.0793854 5.75545 0.602453 6.27787L3.04344 8.76332C3.12269 8.8583 3.17024 8.98495 3.15439 9.09577L2.55207 12.6102C2.42526 13.3543 3.17024 13.9084 3.80426 13.5601L6.83171 11.8978C6.92682 11.8503 7.05362 11.8503 7.16457 11.8978Z" fill="#F7FF48"/>
            </svg>
                {title}</h4>
            <p>12 cuotas mensuales de</p>
            <p> $ {montoDolar}</p>
            <p>o S/{montoSol}</p>
        </span>
    )
}
