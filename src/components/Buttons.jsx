import './styles.css';

export const Buttons = ({ handleStart, handleStop, handleReset }) => {
    return <div>
        <button
            className={'btn'}
            onClick={handleStart}
        >
            {'START'}
        </button>
        <button
            className={'btn'}
            onClick={handleStop}
        >
            {'STOP'}
        </button>
        <button
            className={'btn'}
            onClick={handleReset}
        >
            {'RESET'}
        </button>
    </div>
};
