

const Team = ({teams}) => {
    console.log(teams)
    return (
        <div>
           <h1>this list</h1>
       {teams.map(actor =><li>{actor.name}</li>)}
        </div>
    );
};

export default Team;