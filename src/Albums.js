import axios from 'axios';
import { useEffect, useState } from 'react';

function Albums() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, []);

    return (
        <>
            <table border='1'>
                <th>id</th>
                <th>name</th>
                <th>title</th>

                {
                    data.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                </tr>
                            </>
                        )

                    }

                    )


                }
            </table>
        </>
    )


}

export default Albums;