import React, { useState } from 'react'
import api from '../../service/api'
import {
    ContentWrapper,
    Title
} from './styles'
import TemplateItem from '../TemplateItem'


export default function TemplatesList() {

    const [templates, setTemplates] = useState([])

    api.get('/templates').then(({ data }) => {
        setTemplates(data)
    })

    return (
        <>
            <Title>
                Awesome Templates
            </Title>
            
            {
                templates?.map(template => {
                    return (
                        <ContentWrapper key={template.id}>
                            <TemplateItem name={template.name} />
                        </ContentWrapper>
                    )
                })
            }
        </>
    )
}