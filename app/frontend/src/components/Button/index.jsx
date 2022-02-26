import { Button as BaseButton} from './styles'

export default function Button(props) {
    const { text } = props
    
    return (
        <BaseButton>
            { text }
        </BaseButton>
    )
}