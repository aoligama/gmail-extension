import {
    TemplateWrapper,
    TemplateName,
    Line
} from './styles'
import Button from '../Button'
import {
    Row,
    Column
} from '../Grid'

export default function TemplateItem(props) {
    const { name } = props
    
    return (
        <TemplateWrapper>
            <Row>
                <Column mobile="6" tablet="6" desktop="6">
                    <TemplateName> { name } </TemplateName>
                </Column>

                <Column mobile="6" tablet="6" desktop="6">
                    <Button text="Use Template" />
                </Column>
            </Row>
            <Line />
        </TemplateWrapper>
    )
}