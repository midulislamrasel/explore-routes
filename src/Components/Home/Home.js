import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import User from '../User/User';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Hello This  is Home Page {users.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero labore vel rerum minima animi. Voluptatibus iusto iste eos asperiores sed quaerat perferendis quia consequuntur, eligendi quod rerum nulla harum excepturi inventore? Illo nesciunt ab, suscipit deserunt architecto modi quas nobis repellendus quo quaerat consectetur, quasi eveniet. Pariatur labore facere reprehenderit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quibusdam, deleniti tenetur nulla odio, cumque tempore enim consequatur corporis repellendus natus quasi, officia quod corrupti exercitationem cum molestias maiores debitis quas vitae at ex illum? Aperiam, quo iure qui voluptates quibusdam at sed sunt dolorem doloribus recusandae porro ipsa delectus.</p>
            {
                users.map((user) => <User
                    key={user.id}
                    user={user}
                ></User>)
           }
        </div>
    );
};

export default Home;