import { HTMLAttributes, ReactNode } from "react"
import { Container } from "./style"

interface SectionProps extends HTMLAttributes<HTMLDivElement>{
    children?:ReactNode
    background?:'default'|'gradient'
}

const Section = ({children, background='default', ...props}:SectionProps) =>{
    return(
        <Container {...props} background={background}>
            {children}
        </Container>
    )
}
export default Section