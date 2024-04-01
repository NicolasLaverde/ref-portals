import { createPortal } from 'react-dom'
import {forwardRef, useImperativeHandle, useRef} from 'react'

const ResultModal = ({ targetTime, remainingTime, onReset}, ref) => {
    const lost = remainingTime <= 0 
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const dialog = useRef()
    const score = Math.round((1 - remainingTime / (1000 * targetTime)) * 100)

    useImperativeHandle(ref, () => ({
        // expose open method to other components
        open() {
            dialog.current.showModal()
        }
    }));
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {lost && <h2>You Lost</h2>}
            {!lost && <h2> Your score: {score}</h2>}
            <p> The target time was <strong> {targetTime} seconds </strong></p>
            <p> You stopped the timer with <strong> {formattedRemainingTime} seconds left. </strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button> Close </button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}

export default forwardRef(ResultModal)