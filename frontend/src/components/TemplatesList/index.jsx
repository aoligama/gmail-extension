import React from 'react'
import {
    ContentWrapper,
    Title
} from './styles'
import TemplateItem from '../TemplateItem'
import { templates } from '../../templates'

export default function TemplatesList() {
    return (
        <>
            <Title>
                Awesome Templates
            </Title>
            
            {
                templates?.map(template => {
                    return (
                        <ContentWrapper key={template.id}>
                            <TemplateItem name={template.name} html={template.html} />
                        </ContentWrapper>
                    )
                })
            }
        </>
    )
}