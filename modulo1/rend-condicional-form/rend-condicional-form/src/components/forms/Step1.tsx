import React, {FormEvent} from "react";
import styled from "styled-components";

export function Step1(props: {state: string, setState: Function}) {

    function handleChange(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const selected = (event.currentTarget.elements.namedItem('input-select') as HTMLInputElement).value

        props.setState(selected)

        // console.log(selected)
    }

    return (
        <Container>
            <H1>ETAPA 1 - DADOS GERAIS</H1>
            <Form onChange={handleChange}>

                <div className="mb-3">
                    <label htmlFor="input-name" className="form-label">Nome</label>
                    <input type="text" className="form-control"  id="input-name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-age" className="form-label">Idade</label>
                    <input type="number" className="form-control" id="input-age" />
                </div>

                <div className="mb-3">
                    <label htmlFor="input-email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="input-email" />
                </div>

                <select className="form-select mb-3" name="input-select">
                    <option >Qual sua escolaridade?</option>
                    <option value="1">Ensino médio incompleto</option>
                    <option value="2">Ensino médio completo</option>
                    <option value="3">Ensino superior completo</option>
                    <option value="4">Ensino superior completo</option>
                </select>

               
            </Form>

        </Container>
    )
}

const Container = styled.div`
    display: grid;
    justify-content: center;
`;

const Form = styled.form`
    width: 50rem;
`;

const H1 = styled.h1`
    text-align: center;
`;
