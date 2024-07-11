import { type PropsWithChildren } from "react";
// import { type CourseGoalType } from "../types/CourseGoalType";

type CourseGoalType = PropsWithChildren & {
    title: string;
};

export default function CourseGoal({ title, children }: CourseGoalType) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
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