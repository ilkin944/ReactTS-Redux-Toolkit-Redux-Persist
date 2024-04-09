import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Comments() {

    const [allComments, setAllComments] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const getData = async () => {
        try {
            const req = await axios.get('/comments');
            const data = await req.data;
            setAllComments(data)
        } catch (error) {
            console.error(error);
        }
    }


    // const handleSubmit = async()=>{
    //     try {
    //         // const req = await fetch('https://jsonplaceholder.typicode.com/comments', {
    //         //     method:'POST',
    //         //     body:JSON.stringify({name:name, email:email}),
    //         //     headers:{
    //         //         'Content-type':'Application/json'
    //         //     }
    //         // })
    //         // if (req.ok) {
    //         //     alert('yaradildi')
    //         // }
    //         const req = await axios.post('/comments', {name:name, email:email});
    //         if (req.status === 201) {
    //             alert('yaradildi')
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // const handleDelete = async (id) => {
    //     try {
    //         // const req = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    //         //     method: 'DELETE',
    //         // });
    //         // if (req.ok) {
    //         //     alert('silindi')
    //         // }
    //         const req = await axios.delete(`/comments/${id}`);
    //         req.status === 200 && alert('silindi')
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    const handleEdit = async id => {
        try {
            // const req = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            //     method: 'PUT',
            //     body: JSON.stringify({ name: name, email: email }),
            //     headers: {
            //         'Content-type': 'Application/json'
            //     }
            // });
            const req = await axios.put(`/comments/${id}`, {
                name: name,
                email: email
            });
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>post id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                        <th>sil</th>
                    </tr>
                </thead>
                <tbody>
                    {allComments.length > 0 && allComments.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.postId}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body.length > 20 ? item.body.slice(0, 20) + '...' : item.body}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>sil</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // <>

        //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        //     <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        //     <button onClick={handleSubmit}>Gonder</button>
        // </>
    )
}