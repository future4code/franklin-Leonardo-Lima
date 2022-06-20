import React, { FormEvent } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Container, NextPage } from "./styles";
import { Link } from "react-router-dom";

export function FormRegister() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        name: (
          event.currentTarget.elements.namedItem("name") as HTMLInputElement
        ).value,
        email: (
          event.currentTarget.elements.namedItem("email") as HTMLInputElement
        ).value,
      },
      {
        headers: {
          Authorization: "nome-sobrenome-turma"
        },
      }
    );
    event.currentTarget.reset();
  }
  return (
    <Container>
      <NextPage>
        <Link to="/usuarios">
          <Button variant="primary" type="submit">
            Página de usuários
          </Button>
        </Link>
      </NextPage>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Criar usuário
        </Button>
      </Form>
    </Container>
  );
}
