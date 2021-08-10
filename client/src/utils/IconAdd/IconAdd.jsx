import React from 'react'
import {Fab, Tooltip} from "@material-ui/core"

const IconAdd = ({child, func}) => {
    return (
        <Tooltip size="small" title="Add" onClick={() => func()}>
            <Fab color="primary">
                {child}
            </Fab>
        </Tooltip>
    )
}

export default IconAdd