import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider sx={{ // стили для слайдера // пишет студент
            width: '100%',
            maxWidth: "150px",
            heightMax: "4px",
            borderRadius: '10px',
            color: '#0C2',
            '& .MuiSlider-rail': {
                backgroundColor: 'rgba(139, 139, 139, 1)', // Замените 'your-color-here' на цвет фона
            },
        }}
                {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
