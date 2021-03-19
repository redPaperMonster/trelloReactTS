import React from 'react';
import { Button } from '..';
import { HeaderTitle, HeaderWrapper } from './HeaderStyles';

interface Props {
    userName: string,
    onClick: () => void,
    text: string,
    deleteName: () => void
}

const Header: React.FC<Props> = ({
    userName,
    onClick,
    text,
    deleteName }) => {


    return (
        <HeaderWrapper>
            <HeaderTitle>Welcome, {userName}</HeaderTitle>
            <div>
                <Button
                    style="margin-right: 15px;"
                    onClick={onClick}
                    text={text}></Button>
                <Button
                    text="delete user name"
                    onClick={deleteName}></Button>
            </div>
        </HeaderWrapper>
    )
}

export default Header;