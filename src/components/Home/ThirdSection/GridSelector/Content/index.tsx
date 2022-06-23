import { Container, ContentBody, SocialMediaButton } from "./style"
import {AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'
import { contentData } from "./contentData"
import Link from "next/link"

interface ContentProps{
    selected:'#2ac7e3' | '#8cc84b' |'#4763ff'
    accentColor:string
    gradient:string
}



const Content = ({selected, gradient, accentColor}:ContentProps) =>{

    const data = contentData[selected]
    

    return(
        <Container gradient={data.backgroundColor}>
               <ContentBody>
                    <p style={{margin:'0px 0px 64px'}} dangerouslySetInnerHTML={{__html:data.resume}}/>
                    <h4>
                        {data.educatorName}
                    </h4>
                    <h6 style={{color:data.accentColor}}>
                        {data.role}
                    </h6>
                    <p style={{fontSize:'16px', margin:'0px 0px 36px', color:'var(--text)'}}>
                    {data.experience}
                    </p>
                    <div style={{display:'flex'}}>
                        <SocialMediaButton>
                            <Link href={data.instagram}>
                                <a>
                                <div>
                                    <AiOutlineGithub color={data.accentColor} size={20}/>
                                </div>
                                INSTAGRAM
                                </a>
                            </Link>
                        </SocialMediaButton>
                        <SocialMediaButton>
                            <Link href={data.github}>
                                <a>
                                <div>
                                    <AiOutlineInstagram color={data.accentColor} size={20}/>
                                </div>
                                GITHUB
                                </a>
                            </Link>
                        </SocialMediaButton>
                    </div>
               </ContentBody>
                <img alt={data.educatorName} src={data.imgSrc}/>
        </Container>
    )
}

export default Content