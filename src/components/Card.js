export const Card = ({person}) =>
    <div className={'card '+person.extraStyling}>
        <header className={'card__header'}>
            <img src={person.picture} className={'card__img'} alt="card__img"/>
            <div><h3>{person.name}</h3><p>Verified Account</p></div>
        </header>
        <p className={'card__lead'}>{person.lead}</p>
        <p className={'card__quote'}>{person.quote}</p>
    </div>
