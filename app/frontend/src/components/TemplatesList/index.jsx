import {
    ContentWrapper,
    Title
} from './styles'
import TemplateItem from '../TemplateItem'


export default function TemplatesList() {
    return (
        <>
            <Title>
                Awesome Templates
            </Title>
            <ContentWrapper>
                <TemplateItem name="test" />
            </ContentWrapper>
        </>
    )
}