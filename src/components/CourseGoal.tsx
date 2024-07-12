import { type PropsWithChildren } from "react";

export type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

export default function CourseGoal({ 
                            title, 
                            id,
                            children,
                            onDelete }: CourseGoalProps) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
};


// import { type PropsWithChildren } from "react";
// import { type CourseGoalType } from "../types/CourseGoalType";

// type CourseGoalProps = PropsWithChildren & CourseGoalType;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     );
// };