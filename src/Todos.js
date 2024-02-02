import axios from 'axios';
import { useEffect, useState } from 'react';

function Comments() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])
  return (
    <table border='1'>
      <th>userid</th>
      <th>id</th>
      <th>title</th>
      <th>completed</th>
      {
        data.map((ele, ind) => {
          return (
            <>
              <tr>
                <td>{ele.userId}</td>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.completed ? 'True' : 'False'}</td>
              </tr>
            </>
          )
        }
        )

      }
    </table>
  );
}

export default Comments;
