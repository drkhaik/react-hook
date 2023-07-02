import "./Countries.scss";
import { useEffect, useState } from "react";
import useFetch from "../customize/fetch";

const Countries = () => {
    // if u want to use another name different with the name in function, create and assign it
    const { data: dataCountries, isLoading, isError } = useFetch("https://restcountries.com/v3.1/all")
    // useEffect(() => {
    //     let canceled = false;
    //     setLoading(true);
    //     fakeFetch(person).then((data) => {
    //         if (!canceled) {
    //             setData(data);
    //             setLoading(false)
    //         }
    //     });
    //     return () => (canceled = true);
    // }, [person]);

    // const today = moment().startOf('day');
    // const priorDate = moment().subtract(30, 'days');
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Common Name</th>
                <th>Fifa</th>
                <th>Flag</th>
                <th>Region</th>
                <th>Timezone</th>
            </thead>

            {isError === false && isLoading === false && dataCountries && dataCountries.length > 0 &&
                dataCountries.map(item => {
                    return (
                        <tr>
                            <td> {item.altSpellings[1]} </td>
                            <td> {item.name.common}</td>
                            <td> {item.fifa}</td>
                            <td>{item.flag}</td>
                            <td>{item.region}</td>
                            <td>{item.timezones[0]}</td>
                        </tr>
                    )
                })}
            {isLoading === true
                && <tr>
                    <td colSpan='6' style={{ 'textAlign': 'center' }}>
                        Loading...
                    </td>
                </tr>
            }
            {isError === true
                && <tr>
                    <td colSpan='6' style={{ 'textAlign': 'center' }}>
                        Something went wrong...
                    </td>
                </tr>
            }
        </table>
    )
}

export default Countries;