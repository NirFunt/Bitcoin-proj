
export function MoveList({ loggedinUser, contact }) {
    var contactMoves = [];
    if (contact) contactMoves = loggedinUser.moves.filter(move => move.toId === contact._id);
    else contactMoves = loggedinUser.moves.slice(loggedinUser.moves.length - 3, loggedinUser.moves.length);

    function formatDate(date) {
        let arr = date.split(' ');
        return `${arr[2]} ${arr[1]} ${arr[3]} ${arr[4]}`
    }
    return (
        <div className="move-list">
            <h2>Your Moves:</h2>
            <hr/>
            <ul>
                {contactMoves.map((move, idx) =>
                    <li key={move.at + idx}>
                        {!contact && <p>To: {move.to}</p>}
                        <p>At: {formatDate(new Date(move.at).toString())}</p>
                        <p>Amount: {move.amount} coins</p>
                        <hr/>
                    </li>)}
            </ul>
        </div>
    );
}


