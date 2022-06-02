import React from "react";
import styled from "styled-components";
import {ReactComponent as MinusIcon} from "../../../assets/minus.svg";
import {ReactComponent as PlusIcon} from "../../../assets/plus.svg";

const GuestTab = ({type, detail}) => {
    const Detail = type === "반려동물" ? CompanionAnimalDetail : GuestDetail;

    return (
        <GuestTabBox>
            <div>
                <GuestType>{type}</GuestType>
                <Detail>{detail}</Detail>
            </div>
            <CountBox>
                <IconBox>
                    <MinusIcon />
                </IconBox>
                <Count>0</Count>
                <IconBox>
                    <PlusIcon />
                </IconBox>
            </CountBox>
        </GuestTabBox>
    );
};

const GuestTabBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "space-between")};
`;

const GuestType = styled.p`
    color: ${({theme}) => theme.color.black};
    font-weight: 700;
    font-size: 1rem;
    line-height: 23px;
`;

const GuestDetail = styled.p`
    color: ${({theme}) => theme.color.gray3};
    font-size: 0.725rem;
    line-height: 20px;
`;

const CompanionAnimalDetail = styled.p`
    color: ${({theme}) => theme.color.gray3};
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: underline;
    cursor: pointer;
    line-height: 20px;
`;

const CountBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row")};
    gap: 19px;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 29px;
`;

const Count = styled.p`
    color: ${({theme}) => theme.color.gray1};
`;

const IconBox = styled.div`
    ${({theme}) => theme.layout.flexLayoutMixin("row", "center", "center")};
    width: 30px;
    height: 30px;
    border: 1px solid ${({theme}) => theme.color.gray3};
    border-radius: ${({theme}) => theme.borderRadius.circle};
    svg {
        width: 18px;
        height: 18px;
        color: ${({theme}) => theme.color.gray3};
    }
`;

export default GuestTab;
