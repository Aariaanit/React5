import React from 'react'

function BlogList(props) {
    const list = props.list;
    const deleteButton = props.deleteButton;
    const viewButton = props.viewButton;
  return (
    <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
         {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>City: {item.city}</p>
                    <button onClick={() => deleteButton(item.id)}>Delete</button>
                    <button onClick={() => viewButton(item.id)}>View</button>
                    <hr />
                </div>
        ))}
        </tbody>
      </table>  
    </>
  )
}

export default BlogList