import React, { useState } from 'react'

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
    const { name, html } = props
    const [selected, setSelected] = useState('')

    const handleTemplateSelection = (name, html) => {
        console.log(name, html)
        if(selected && name === selected) {
            setSelected('')
            window.parent.postMessage({ template: '' }, 'https://mail.google.com/')
        } else {
            setSelected(name)
            window.parent.postMessage({ template: html }, 'https://mail.google.com/')
        }
    }

    const getButtonColor = (name) => {
        if(selected && selected === name) {
            return '#FF3B3B'
        } return '#00CFE6'
    }

    const getButtonText = (name) => {
        if(selected && selected === name) {
            return 'Remove'
        } return 'Use'
    }
    
    return (
        <TemplateWrapper>
            <Row>
                <Column mobile="6" tablet="6" desktop="6">
                    <TemplateName> { name } </TemplateName>
                </Column>

                <Column mobile="6" tablet="6" desktop="6">
                    <Button
                        color={getButtonColor(name)}
                        text={getButtonText(name)}
                        onClick={() => handleTemplateSelection(name, html)}
                    />
                </Column>
            </Row>
            <Line />
        </TemplateWrapper>
    )
}