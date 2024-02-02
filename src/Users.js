import axios from 'axios';
import { useEffect, useState } from 'react';

function Comments() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
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
      <th>id</th>
      <th>name</th>
      <th>email</th>
      <th>address
        <table border={1}>
          <td>street</td>
          <td>suite</td>
          <td>city</td>
          <td>zipcode</td>
        </table>
      </th>
      <th>phone</th>
      <th>website</th>
      {
        data.map((ele, ind) => {
          return (
            <>
              <tr>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>

                <td>
                  <tr>
                  <td>{ele.address.street}</td>
                  <td>{ele.address.suite}</td>
                  <td>{ele.address.city}</td>
                  <td>{ele.address.zipcode}</td>
                  </tr>
                </td> 
                <td>{ele.phone}</td>
                <td>{ele.website}</td>

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
