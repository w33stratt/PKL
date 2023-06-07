//import hook react
import React, { useState, useEffect } from 'react';

//import hook useHitory from react router dom
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';
//import axios
import axios from 'axios';

function Dashboard() {
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:8000/api/expertise');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

    //state user
    const [user, setUser] = useState({});

    //define history
    const history = useHistory();

    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/user')
        .then((response) => {

            //set response user to state
            setUser(response.data);
        })
    }

    //hook useEffect
    useEffect(() => {

        //check token empty
        if(!token) {

            //redirect login page
            history.push('/');
        }
        
        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHanlder = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
        .then(() => {

            //remove token from localStorage
            localStorage.removeItem("token");

            //redirect halaman login
            history.push('/');
        });
    };

    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                           
                            <hr />
                            <button onClick={logoutHanlder} className="btn btn-md btn-danger">Products </button>
                            
                            <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                           
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>TITLE</th>
                                        <th>DESC</th>
                                        <th>Client</th>
                                        <th>File</th>
                                        <th>Image</th>

                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.title }</td>
                                            <td>{ post.desc }</td>
                                            <td>{ post.client }</td>
                                            <td>{ post.file }</td>
                                            <td>{ post.image }</td>
                                            <Button as={Link} to={`/editpost/dashboard/${post.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;