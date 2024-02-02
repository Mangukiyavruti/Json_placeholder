import axios from 'axios';
import { useEffect, useState } from 'react';

function Comments() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
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
      <th>postid</th>
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>body</th>

      {
        data.map((ele, ind) => {
          return (
            <>
              <tr>
                <td>{ele.postId}</td>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.body}</td>
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
