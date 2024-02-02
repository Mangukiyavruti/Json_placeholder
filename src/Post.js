import axios from 'axios';
import { useEffect, useState } from 'react';

function Post() {
    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
            <table border={1}>
                <th>user id</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                {
                    data.map((ele, ind) => {
                        return (
                            <>
                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            </>
                        )
                    }
                    )
                }
            </table>
        </>

    );

}


export default Post;