import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
    max-width: 432px;
`;

export const Text = styled.p`
    color: var(--primary-text-color);
    font-size: 20px;
    &:first-child {
    font-weight: 500; 
    color: var(--secondary-text-color);  
    }
`;

export const Button = styled.button`
        // width: 100%;
        min-width: 120px;
        height: 40px;

        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        background-color: var(--accent-color);
        color: var(--primary-white-color);
        font-weight: 700;
        font-size: 16px;
        // text-transform: uppercase;
        transition: background-color var(--transition);

        &:hover,
        &:focus {
        background-color: #188CE8;
    }
`