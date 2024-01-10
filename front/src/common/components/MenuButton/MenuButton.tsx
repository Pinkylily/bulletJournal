import React from "react"
import {Button} from "@mui/material";

type  MenuType = 'day' | 'month' | 'year'

interface IMenuButtonProps {
    type: MenuType
    icon: React.ReactNode

    onClick(): void
}

const LABEL_BY_TYPE: Record<MenuType, string> = {
    'day': 'Jour',
    'month': 'Mois',
    'year': 'Année',
}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = ({type, icon, onClick}) => {
    return <Button startIcon={icon} onClick={onClick}>{LABEL_BY_TYPE[type]}</Button>
}

export default MenuButton
