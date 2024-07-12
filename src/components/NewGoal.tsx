import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({onAddGoal}: NewGoalProps) {
    // refs can be used for managing any kind of value, not just HTML elements
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // ! means current will never be null
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );  
};