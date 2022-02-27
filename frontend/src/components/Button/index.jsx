import { Button as BaseButton} from './styles'

export default function Button(props) {
    const { text, color, ...rest } = props
    
    return (
        <BaseButton style={{backgroundColor: color ?? '#00CFE6'}} onClick={rest.onClick}>
            { text }
        </BaseButton>
    )
}