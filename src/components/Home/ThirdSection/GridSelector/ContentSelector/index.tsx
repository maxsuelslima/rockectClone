import { HTMLAttributes } from "react"
import { Button, TextContainer } from "./style"

interface ContentSelector{
    title:string 
    subtitle:string 
    gradient:string 
    imageSrc:string
    accentColor:string
    selected:string
    onSelect:(_value:any)=>void
}

const ContentSelector = ({title, subtitle, gradient, imageSrc, accentColor, selected, onSelect}:ContentSelector) => {

    const selectedStyle=
        accentColor===selected?
        {
            height:'95px'
        }
        :
        {
            height:'72px'
        }
    return(
        <Button style={selectedStyle} onClick={()=>onSelect(accentColor)} gradient={accentColor===selected?gradient:''}>
            <div style={{marginLeft:'-30px', display:"flex"}}>
            <img style={{zIndex:1,objectFit:'contain'}} alt={`selecionar:${title}`} src={imageSrc}/>
                <TextContainer accentColor={accentColor} style={{border:`${accentColor===selected?'none':''}`}}>
                    <h4 dangerouslySetInnerHTML={{__html:title}}></h4>
                    <h5 dangerouslySetInnerHTML={{__html:subtitle}}></h5>
                </TextContainer> 
            </div>
        </Button>
    )
}
export default ContentSelector