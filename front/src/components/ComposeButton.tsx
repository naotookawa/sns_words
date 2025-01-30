interface ComposeButtonProps {
    setButtonClicked: (buttonClicked: boolean) => void;
}

export const ComposeButton: React.FC<ComposeButtonProps> = ({setButtonClicked}) => {
    return (
        <>
            <button onClick={() => setButtonClicked(true)}>+</button>
        </>
    );
};