import React, { useEffect, useState } from "react";
import "./Servico.css";
import axios from "axios";

function Servico() {
  const [servico, setServico] = useState({
    valorServico: "",
    nomeCliente: "",
    dataInicio: "",
    dataTermino: "",
    descricaoServico: "",
    valorPago: "",
    dataPagamento: "",
  });
  const [servicos, setServicos] = useState([]);
  const [atualizar, setAtualizar]= useState();
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/servico/").then(result =>(
        setServicos(result.data)
    ));
  },[atualizar]);

  function handleChange(event) {
    setServico({ ...servico, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/api/servico/", servico).then((result) => {
      setAtualizar(result);
    });
  }

  return (
    <div className="container">
      <h1>Cadastro de Serviços</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <div>
            <label className="form-label">Nome do Cliente</label>
            <input
              onChange={handleChange}
              value={servico.nomeCliente}
              name="nomeCliente"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Data de Inico</label>
            <input
              onChange={handleChange}
              value={servico.dataInicio}
              name="dataInicio"
              type="date"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Data de Termino</label>
            <input
              onChange={handleChange}
              value={servico.dataTermino}
              name="dataTermino"
              type="date"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Descrição do Seviço </label>
            <input
              onChange={handleChange}
              value={servico.descricaoServico}
              name="descricaoServico"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Valor do Servico</label>
            <input
              onChange={handleChange}
              value={servico.valorServico}
              name="valorServico"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input
              onChange={handleChange}
              value={servico.valorPago}
              name="valorPago"
              type="text"
              className="form-control"
            />
          </div>
          <div>
            <label className="form-label">Data de Pagamento</label>
            <input
              onChange={handleChange}
              value={servico.dataPagamento}
              name="dataPagamento"
              type="date"
              className="form-control"
            />
          </div>
          <br />

          <input type="submit" value="cadastrar" className="btn btn-success" />
        </div>
      </form>
      <hr />
       <h2 className="container">Serviços Cadstrados</h2>
       <hr />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor do Serviço</th>
            <th scope="col">Status</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map((serv) => (
            <tr key={serv.id}>
              <td>{serv.nomeCliente}</td>
              <td>{serv.descricaoServico}</td>
              <td>{serv.valorServico}</td>
              <td>{serv.status}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Servico;
