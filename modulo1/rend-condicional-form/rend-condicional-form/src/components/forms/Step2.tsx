import React from "react";
import styled from "styled-components";

export function Step2() {

    return (
        <Container>
            <H1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H1>
            <Form>

                <div className="mb-3">
                    <label htmlFor="input-curse" className="form-label">Qual curso?</label>
                    <input type="text" className="form-control" id="input-curse" />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-unit" className="form-label">Qual unidade de ensino?</label>
                    <input type="text" className="form-control" id="input-unit" />
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
