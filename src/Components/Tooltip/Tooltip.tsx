import React from 'react'
import { TooltipInner, TooltipWrapper } from './TooltipStyles';


interface Props {
    showTooltip: boolean
}

const Tooltip: React.FC<Props> = ({
    showTooltip
}) => {

    if (!showTooltip) return null;
    return (
        <TooltipWrapper>
            <TooltipInner>some tooltip</TooltipInner>
        </TooltipWrapper>
    )
}

export default Tooltip;