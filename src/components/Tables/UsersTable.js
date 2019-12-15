import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  Table,
  TableData,
  TableHeader,
  TableButton,
  Pagination,
  PaginationButton,
  PaginationInfo,
  TableAlert
} from "../global";

export default function CaptationsTable() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState([]);
  const token = localStorage.getItem("@userIdentification");
  const history = useHistory();

  useEffect(() => {
    loadUsers();
  }, [page]);

  async function nextPageClick() {
    await setPage(page + 1);
    await loadUsers();
  }

  async function loadUsers() {
    const response = await api.get(`/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const pages = await api.get(`/countUsers`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    await setAllPages(pages.data);
    await setUsers(response.data);
  }

  async function PreviousPageClick() {
    await setPage(page - 1);

    await loadUsers();
  }

  async function openUser(id) {
    history.push(`/admin/user-edit?id=${id}`);
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Telefone</TableHeader>
            <TableHeader>Corretor?</TableHeader>
            <TableHeader>Ativo?</TableHeader>
          </tr>

          {users.map((captation, index) => (
            <tr key={users[index]._id}>
              <TableData>
                <strong>{users[index].name}</strong>
              </TableData>
              <TableData>{users[index].email}</TableData>
              <TableData>
                {users[index].phone
                  ? users[index].phone
                  : "Não há telefone cadastrado"}
              </TableData>
              <TableData>
                {users[index].isBroker === true ? (
                  <TableAlert sent>Corretor</TableAlert>
                ) : (
                  <TableAlert>Admin</TableAlert>
                )}
              </TableData>
              <TableData>
                {users[index].active === true ? (
                  <TableAlert sent>Ativo</TableAlert>
                ) : (
                  <TableAlert>Inativo</TableAlert>
                )}
              </TableData>
              <TableData>
                <TableButton onClick={() => openUser(users[index]._id)}>
                  Editar
                </TableButton>
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {page <= 1 ? (
          ""
        ) : (
          <PaginationButton onClick={() => PreviousPageClick()}>
            Anterior
          </PaginationButton>
        )}
        <PaginationInfo>Página {page}</PaginationInfo>
        {page >= allPages ? (
          ""
        ) : (
          <PaginationButton onClick={() => nextPageClick()}>
            Próxima
          </PaginationButton>
        )}
      </Pagination>
    </>
  );
}
