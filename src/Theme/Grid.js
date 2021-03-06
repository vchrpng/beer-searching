import styled , { css } from 'styled-components'

export const Flex = styled.div`

    display:flex;

    ${({ justify }) => justify && css`

        justify-content: ${ justify };

    ` }

    ${({ align }) => align && css`
    
        align-items: ${ align };
    `}

`

export const Layout = styled(Flex)`
    padding:20px;
    margin:0 auto;
    
`
export const Container = styled.div`

    height:100vh;
    padding-top:100px;
`