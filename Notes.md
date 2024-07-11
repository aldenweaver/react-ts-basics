# React & TypeScript Notes

## Typed Components & Props
+ Can make type definition for component props

``` ts
import { type ReactNode } from 'react';

type CourseGoalType = { 
    title: string; 
    children: ReactNode
};

export default function CourseGoal({ title, children }: CourseGoalType) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
    );
}
```

## Props & Children Props
+ Every props object also has a children props which is populated by React
+ Children prop allows us to wrap our component around other JSX code and then use that wrapped JSX code inside the component
+ Children prop is usually not in type def, so add it
+ type decorator in import makes it clear can remove this in js since it is a type related import

``` ts
import { type ReactNode } from 'react';

type CourseGoalType = { 
    title: string; 
    children: ReactNode
};

```

or

``` ts
import { type PropsWithChildren } from 'react';

type CourseGoalType = PropsWithChildren & { 
    title: string; 
};
```

or 

``` ts
import { type PropsWithChildren, type ReactNode } from 'react';

type CourseGoalType = PropsWithChildren<{ title: string }>;
```

## Component Props & The Special "key" Prop
All React components (built-in components and also your custom components) do accept a special key prop which is used by React to track specific component instances.

For example, the key prop should always be set when outputting a list of components.

This key prop can be set on custom components even if you didn't specify it in your props type!

For example, the following component code will work:

``` ts
type UserProps = {
  name: string;
};
 
function User({ name }: UserProps) {
  return <li>User: {name}</li>;
}
 
function App() {
  const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
 
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <User key={user} name={user.name} />
        ))}
      </ul>
    </>
  );
}
```

## Arrow Functions: Another Way of Typing Components
``` ts
import { type PropsWithChildren } from 'react';

type CourseGoalType = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalType) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
    );
}
```

or

+ FC stands for functional component (also a generic type, the connected type is a props type)

``` ts
import { type FC, type PropsWithChildren } from 'react';

type CourseGoalType = PropsWithChildren<{ title: string }>;

const CourseGoal: FC<CourseGoalType> = ({ title, children }) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
    );
}
```


## Spread Operator
+ Can use `...` to take all key value pairs in an object and spread them as props onto an HTML element

Instead of: 
```ts
export default function Header({ img, children }: HeaderType) {
    return(
        <header>
            <img src={img.src} alt={img.alt}/>
            {children}
        </header>
    );
};
```

Can do:
```ts
export default function Header({ img, children }: HeaderType) {
    return(
        <header>
            <img {...img}/>
            {children}
        </header>
    );
};
```


## State
+ State is within a component; props is passed from parent to child components
+ State leads to different UIs being rendered, for example in response to an action
+ useState hook returns an array with the first element being the current state snapshot and the second is a function to call to update the state snapshot and to trigger the component function to be executed again (re-render component with updated state)
+ Need to tell React which type of value we are going to manage with useState, sometimes it can infer this
+ useState is a generic function that we can use to set the type of value that will be managed by that state
+ If your new state depends on your old state, you should use lambda/arrow/anonymous function syntax

```ts
```

## Dynamic Handlers
+ Handles dynamically adding more data; handles state change
```ts
function handleAddGoal() {}
```

or

```ts
function addGoalHandler() {}
```