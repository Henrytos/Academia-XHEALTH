export default function CardLocal({ local }) {
    return <div key={local.id}>
        <img src={local.imageUrl} alt={local.name}  />
        <span>{local.name}</span>
        <div>
            <span>{local.planBasic}</span>
            <span>{local.plan}</span>
            <span>{local.planBlack}</span>
        </div>

    </div>
}