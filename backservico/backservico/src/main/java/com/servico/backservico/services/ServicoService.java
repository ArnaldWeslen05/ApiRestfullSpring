package com.servico.backservico.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servico.backservico.models.Servico;
import com.servico.backservico.respository.ServicoRepository;

@Service
public class ServicoService {
    @Autowired
    private ServicoRepository servicoRepository;

    // para listar todos os serviços buscados pelo cliente
    public List<Servico> buscarTodos(){
        return servicoRepository.findAll();
    }

    public List<Servico> buscarServicosPagamentoPendente(){
        return servicoRepository.buscarServicosPagamentoPendente();
    }

    public List<Servico> buscarServicoCancelados(){
        return servicoRepository.buscarServicosCancelados();
    }

    public Servico inserir( Servico servico){
        if(servico.getValorPago()==null || servico.getValorPago()==0 || servico.getDataPagamento()==null){
            servico.setStatus("pendente");
        }else{
            servico.setStatus("Realizado");
        }
        Servico servicoBanco = servicoRepository.save(servico);
        return servicoBanco;
    }

    public Servico alterar(Servico servico){
        if(servico.getValorPago()!= null && servico.getValorPago()>0 && servico.getDataPagamento()!=null){
            servico.setStatus("Realizado");
        }
        return servicoRepository.saveAndFlush(servico);
    }

    public void eexcluir (Long id){
        Servico servico = servicoRepository.findById(id).get();
        servicoRepository.delete(servico);
    }
}
