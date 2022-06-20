import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../../types";
import { Container, PrevPage } from "./styles";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);

  function handleClick(id: number) {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "nome-sobrenome-turma",
        },
      }
    );
  }

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "nome-sobrenome-turma",
          },
        }
      )
      .then((response) => {
        setUsers(response.data);
      });
  });
  return (
    <Container>
      <PrevPage>
        <Link to="/">
          <Button variant="primary" type="submit">
            Página de Cadastro
          </Button>
        </Link>
      </PrevPage>

      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name}{" "}
              <Badge
                bg="danger"
                onClick={() => {
                  handleClick(user.id);
                }}
              >
                X
              </Badge>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
