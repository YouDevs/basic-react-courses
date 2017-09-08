// ES5
// function Saludar(props){
//     return <h1>Hola { props.name }</h1>;
// }

// ReactDOM.render(
//     <div>
//         <Saludar name="Carlos"/>
//         <Saludar name="Eduardo"/>
//         <Saludar name="Andrea"/>
//         <Saludar name="Edgar"/>
//         <Saludar name="KJordi"/>
//     </div>,
//     document.getElementById('app')
// );

const teachers = [
    {
        name: 'Andrea',
        avatar: 'chew.jpg'
    },
    {
        name: 'KJordi',
        avatar: 'chew.jpg'
    },
    {
        name: 'Edgar',
        avatar: 'chew.jpg'
    },
    {
        name: 'Carlos',
        avatar: 'chew.jpg'
    },

];

//ES6
// Componente: Avatar
// const Avatar = props => {
//     return <img src={props.img} alt={props.name} />;
// }
const Avatar = props => <img src={props.user.avatar} alt={props.user.name} width="64px"/>;
// Componente: UserName
const UserName = props => <p>{props.user.name}</p>;

// Componente: User
const User = props => {
    return (
        <div className="user-item">
            <Avatar user={props.user} />
            <UserName user={props.user} />
        </div>
    )
};

// Componentes UsersLists
const UsersLists = props => {
    // para cada elemento de la lista vamos emplear el componente User
    const userList = props.list.map((u, i) => <User user={u} key={i} />);
    return (
        <div ClassName="user-list">
            {userList}
        </div>
    )
};

ReactDOM.render(
    <UsersLists list={teachers} />,
    document.getElementById('app')
);

// ReactDOM.render(
//     <div>
//         <User user={teachers[0]} />
//         <User user={teachers[1]} />
//         <User user={teachers[2]} />
//         <User user={teachers[3]} />
//     </div>,
//     document.getElementById('app')
// );

// TODO COMPONENTE RECIBE UN OBJETO props,
// Cuando se necesita sacar datos de ese COMPONENTE
// se debe sacar del objeto props

// Las propiedades (props): son inmutables.
