import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState([]);
  const token = localStorage.getItem("@userIdentification");
  const history = useHistory();

  useEffect(() => {
    loadNewCaptations();
  }, [page]);

  async function nextPageClick() {
    await setPage(page + 1);
    await loadNewCaptations();
  }

  async function loadNewCaptations() {
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
    await setAllPages(pages.data);
    await setCaptations(response.data);
  }

  async function PreviousPageClick() {
    await setPage(page - 1);

    await loadNewCaptations();
  }

  async function openProperty(property) {
    history.push(`/admin/property?code=${property}`);
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
                <TableButton
                  onClick={() => openProperty(captations[index].code)}
                >
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
