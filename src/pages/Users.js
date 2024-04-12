import React from 'react';
import Table from 'react-bootstrap/Table';

const Users = ({ data, filteredData }) => {

  return (

    <div className="container">
    <div className="row">
   
      <div className="col-md-8">
             
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th> Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>User Description</th>
          </tr>
        </thead>
<tbody>
  
{data?.length > 0 ? 
        data?.map((item, index) => {
          
          return (
            
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.userAddress}</td>
                <td>{item.userDescription}</td>
              </tr>
          )
         
        }) : <div className="fs-5">No Data found</div>
      }
        </tbody>
      </Table>

      </div>
        <div className="col-md-4"> <div className="col-md-12">&nbsp;</div>
          <img src={require('../asset/as1.png')} /> </div>
      </div>
    </div>
  );

};

export default Users;
