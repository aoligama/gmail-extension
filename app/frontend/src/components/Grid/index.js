import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1360px;
    padding: 20px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
`

function getGridWidth(value) {
    if (!value) return
    
    const width = value / 12 * 100
    return `width: ${width}%`
}

export const Column = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getGridWidth(mobile)}
    }

    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getGridWidth(tablet)}
    }

    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getGridWidth(desktop)}
    }
`