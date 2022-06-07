import React from "react";
import styled from "styled-components";

export function Step3() {

    return (
        <Container>
            <H1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H1>
            <Form>

                <div className="mb-3">
                    <label htmlFor="input-not-finish" className="form-label">Por que você não terminou um curso de graduação?</label>
                    <input type="text" className="form-control" id="input-not-finish" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-complementar-curse" className="form-label">Você fez algum curso complementar?</label>
                    <input type="text" className="form-control" id="input-complementar-curse" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
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
