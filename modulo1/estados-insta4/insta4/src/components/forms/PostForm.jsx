import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;

`;
const Form = styled.form`
    width: 40rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    background-color: #cecece;
`;

export function PostForm({state, setState}) {

    function handleSubmit(e) {
        e.preventDefault();

        const user = {
            name: e.target.name.value,
            photo: e.target.photo.value,
            post: e.target.post.value
        }
        e.target.reset();
        setState([...state, user])
    }

    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
                        <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputPassword1" className="form-label">Foto usuário</label>
                        <input name="photo" type="url" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputImagem1" className="form-label">Foto post</label>
                        <input name="post" type="url" className="form-control" id="exampleInputImagem1" />
                    </div>
                    <button type="submit" className="btn btn-primary" >Postar</button>
                </Form>
            </FormContainer>
        </>
    )
}
