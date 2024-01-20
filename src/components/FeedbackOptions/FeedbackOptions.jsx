import { Button } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   
const buttonElements = options.map((option) => {
    return (
        <Button key={option} onClick={(()=> onLeaveFeedback(option))}>{option.charAt(0).toUpperCase() + option.slice(1)}</Button>
    )



})

return buttonElements

}