interface FavoriteItem { 
    title: string; 
    description: string; 
    route: string;
};

export default function FavoriteItem({ title, description, route }: FavoriteItem) 
{
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={route}>{route}</a>
            </div>
        </>
    );

}