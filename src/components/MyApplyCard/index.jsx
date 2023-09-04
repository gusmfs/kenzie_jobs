export const MyApplyCard = ({apply}) => {
    return(
        <>
            <li >
                <div>
                    <p> <strong className="title boldAlert">{apply.name}</strong></p>
                    <div >
                        <p>Detalhes da candidatura</p>
                        <p>Email: {apply.email}</p>
                    </div>
                </div>
            </li>
        </>
    );
};