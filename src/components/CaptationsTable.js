import React, { useEffect, useState } from "react";

import api from "../services/api";

import {
  Table,
  TableData,
  TableHeader,
  TableButton,
  Pagination,
  PaginationButton,
  PaginationInfo
} from "./global";

export default function CaptationsTable() {
  const [captations, setCaptations] = useState([]);
  const [page, setPage] = useState([]);
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    setPage(1);
    loadNewCaptations();
  }, []);

  useEffect(() => {
    loadNewCaptations();
  });

  async function nextPageClick() {
    await setPage(page + 1);
    console.log("Previous");
  }

  async function loadNewCaptations() {
    const token = localStorage.getItem("@userIdentification");
    const response = await api.get(`/captations?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const pages = await api.get(`/count`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    await setAllPages(pages);
    await setCaptations(response.data);
  }

  async function PreviousPageClick() {
    await setPage(page - 1);
    console.log("Previous");
  }

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <TableHeader>COD.</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Cidade</TableHeader>
            <TableHeader>Bairro</TableHeader>
            <TableHeader>Finalidade</TableHeader>
            <TableHeader>Lida</TableHeader>
            <TableHeader>Enviada</TableHeader>
            <TableHeader>Editar</TableHeader>
          </tr>

          {captations.map((captation, index) => (
            <tr key={captations[index]._id}>
              <TableData>
                <strong>{captations[index].code}</strong>
              </TableData>
              <TableData>{captations[index].type}</TableData>
              <TableData>{captations[index].city}</TableData>
              <TableData>{captations[index].neighborhood}</TableData>
              <TableData>{captations[index].finality}</TableData>
              <TableData>
                {captations[index].isRead === true ? "Lida" : "Não Lida"}
              </TableData>
              <TableData>
                {captations[index].isSent === true ? "Enviada" : "Não Enviada"}
              </TableData>
              <TableData>
                <TableButton>Editar</TableButton>
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
