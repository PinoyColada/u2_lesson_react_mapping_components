import CountryItem from "./CountryItem"

function RightSideBar(props) {

    return (
        <div className="right">
        <h1>Countries</h1>
        <ul>
            { props.countries.map((country) => (
                <CountryItem
                key={country.capitol}
                capitol={country.capitol}
                name={country.name}
                />
            ))}
        </ul>
        </div>
    )
}

export default RightSideBar